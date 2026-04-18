'use client';
import { FC, FormEvent, MouseEvent, useState } from 'react';
import Label from './ContactForm/Label';
import Button from './ui/Button';
import { useContact } from './Provider';
import { X } from 'lucide-react';
import { toast } from 'react-hot-toast';
import Spinner from './Spinner';
import { personalInfo } from '@/user.config';
import { supabase } from '@/lib/supabase';
interface ContactFormProps { }

const ContactForm: FC<ContactFormProps> = ({ }) => {

    const { showForm, setFormVisibility } = useContact();
    const [loader, setLoader] = useState(false);
    const handleFormClick = (e: MouseEvent<HTMLFormElement>) => {
        // Prevent the click event from bubbling up to the outer div
        e.stopPropagation();
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const readInput = ({ name, value }: { name: string; value: string }) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setLoader(true);
        e.preventDefault();
        const { name, email, message } = formData;
        if (name && email && message) {
            try {
                if (!supabase) {
                    throw new Error('Supabase is not configured. Please add your environment variables to Vercel.');
                }
                const { error } = await supabase
                    .from('messages')
                    .insert([{ name, email, message }]);

                setLoader(false);
    
                if (!error) {
                    // Trigger the automated email
                    const emailRes = await fetch('/api/contact', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(formData),
                    });

                    if (emailRes.ok) {
                        toast.success('Thanks! Message saved and Email notification sent.');
                    } else {
                        console.warn('DB saved, but Email failed to send. Check API keys.');
                        toast('Message saved to DB, but email failed. Check logs.', { icon: '⚠️' });
                    }

                    setFormVisibility();
                    setFormData({ name: '', email: '', message: '' }); // Clear form
                } else {
                    throw error;
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error('Failed to send message. Please try again.');
            }
        } else {
            toast.error('Please fill in all fields.');
            setLoader(false);
        }
    };
    
    return (
        <>
            {showForm && (
                <div
                    className="h-screen bg-blur backdrop-filter backdrop-blur-sm bg-[rgba(0,0,0,0.9)] w-screen fixed z-40 flex items-center justify-center"
                    onClick={() => setFormVisibility()}
                >
                    <X className="text-primary absolute right-5 top-5 cursor-pointer" />
                    <form
                        method="POST"
                        onSubmit={handleSubmit}
                        onClick={handleFormClick}
                        className="grid gap-5 w-96 p-5 bg-cardPrimary rounded-lg text-info shadow-lg relative"
                    >
                        <Label
                            readInput={readInput}
                            value={formData.name}
                            name="name"
                            label="Full Name"
                        />
                        <Label
                            readInput={readInput}
                            value={formData.email}
                            name="email"
                            label="Email"
                            type="email"
                        />
                        <Label
                            readInput={readInput}
                            value={formData.message}
                            name="message"
                            label="Message"
                            type="textarea"
                        />
                        <Button
                            disabled={loader}
                            variant="highlight"
                            sizes="medium"
                            className="w-full"
                        >
                            {loader ? <Spinner /> : 'Submit'}
                        </Button>
                    </form>
                </div>
            )}
        </>
    );
};

export default ContactForm;
