'use client';
import { FC, useState, useEffect } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { pageSections } from '@/data/pageSections';

interface SearchProps {}

const Search: FC<SearchProps> = ({}) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<{ id: string; title: string }[]>([]);

    useEffect(() => {
        if (query.length > 1) {
            const filtered = pageSections
                .filter(s => s.title.toLowerCase().includes(query.toLowerCase()))
                .map(s => ({ id: s.id, title: s.title }));
            setResults(filtered);
        } else {
            setResults([]);
        }
    }, [query]);

    const handleJump = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setQuery(''); // Clear search
        }
    };

    return (
        <div className="relative px-4 mb-6">
            <div className="flex items-center gap-2 bg-[#1c1b23] border border-white/5 rounded-lg px-3 py-2 transition-all focus-within:border-primary/50">
                <SearchIcon size={16} className="text-zinc-500" />
                <input
                    type="text"
                    placeholder="Search skills..."
                    className="bg-transparent text-sm text-white outline-none w-full placeholder:text-zinc-600"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {query && (
                    <button onClick={() => setQuery('')}>
                        <X size={14} className="text-zinc-500 hover:text-white" />
                    </button>
                )}
            </div>

            {results.length > 0 && (
                <div className="absolute left-4 right-4 mt-2 bg-[#1c1b23] border border-white/10 rounded-lg shadow-2xl z-50 overflow-hidden">
                    {results.map((res) => (
                        <button
                            key={res.id}
                            onClick={() => handleJump(res.id)}
                            className="w-full text-left px-4 py-3 text-sm text-zinc-300 hover:bg-primary/20 hover:text-white transition-colors border-b border-white/5 last:border-0"
                        >
                            {res.title}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
