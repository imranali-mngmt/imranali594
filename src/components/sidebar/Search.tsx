'use client';
import { FC, useState, useEffect, useMemo } from 'react';
import { Search as SearchIcon, X, Tag, Layout } from 'lucide-react';
import { pageSections } from '@/data/pageSections';
import { projectCard } from '@/components/utils/Data';

interface SearchResult {
    id: string;
    title: string;
    type: 'Section' | 'Skill' | 'Project';
    parent?: string;
}

const Search: FC = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);

    // 1. Build a global index of everything on the page
    const globalIndex = useMemo(() => {
        const index: SearchResult[] = [];

        // Add main sections
        pageSections.forEach(section => {
            index.push({ id: section.id, title: section.title, type: 'Section' });
            
            // Add all cards/skills inside each section
            section.data.forEach(item => {
                index.push({ 
                    id: section.id, // Point to the section for scrolling
                    title: item.title, 
                    type: 'Skill',
                    parent: section.title
                });
            });
        });

        // Add projects
        projectCard.forEach(project => {
            index.push({ id: 'projects', title: project.title, type: 'Project' });
        });

        return index;
    }, []);

    useEffect(() => {
        if (query.trim().length > 1) {
            const lowQuery = query.toLowerCase();
            const filtered = globalIndex.filter(item => 
                item.title.toLowerCase().includes(lowQuery) ||
                (item.parent && item.parent.toLowerCase().includes(lowQuery))
            );
            
            // Remove duplicates and limit to top 8 for UI cleanliness
            const unique = filtered.filter((v, i, a) => a.findIndex(t => t.title === v.title) === i);
            setResults(unique.slice(0, 8));
        } else {
            setResults([]);
        }
    }, [query, globalIndex]);

    const handleJump = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Account for any sticky headers
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setQuery('');
        }
    };

    return (
        <div className="relative px-4 mb-8">
            <div className="flex items-center gap-3 bg-[#1c1b23] border border-white/5 rounded-xl px-4 py-3 transition-all focus-within:border-primary/60 focus-within:bg-[#23222a] shadow-inner">
                <SearchIcon size={18} className="text-zinc-500" />
                <input
                    type="text"
                    placeholder="Search anything (e.g. Docker, CRM...)"
                    className="bg-transparent text-sm text-white outline-none w-full placeholder:text-zinc-600 font-medium"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {query && (
                    <button onClick={() => setQuery('')}>
                        <X size={16} className="text-zinc-500 hover:text-white" />
                    </button>
                )}
            </div>

            {results.length > 0 && (
                <div className="absolute left-4 right-4 mt-2 bg-[#1c1b23] border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 overflow-hidden backdrop-blur-md">
                    <div className="px-4 py-2 text-[10px] uppercase font-bold text-zinc-600 border-b border-white/5 tracking-widest">
                        Search Results
                    </div>
                    {results.map((res, index) => (
                        <button
                            key={`${res.id}-${index}`}
                            onClick={() => handleJump(res.id)}
                            className="w-full text-left px-4 py-4 group transition-all hover:bg-primary/10 border-b border-white/5 last:border-0"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-zinc-200 group-hover:text-primary transition-colors">
                                    {res.title}
                                </span>
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-800 text-zinc-500 group-hover:bg-primary group-hover:text-black transition-all">
                                    {res.type}
                                </span>
                            </div>
                            {res.parent && (
                                <div className="text-[11px] text-zinc-500 mt-0.5">
                                    In {res.parent}
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
