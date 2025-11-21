import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Terminal as TerminalIcon, Maximize2, Minus, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Terminal = ({ onOpenResume }) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: `Welcome to ${portfolioData.about.name}'s Portfolio v1.0.0` },
        { type: 'output', content: 'Type "help" to see available commands.' }
    ]);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        const newHistory = [...history, { type: 'command', content: cmd }];

        switch (trimmedCmd) {
            case 'help':
                newHistory.push({
                    type: 'output',
                    content: (
                        <div className="space-y-1">
                            <p>Available commands:</p>
                            <div className="grid grid-cols-[100px_1fr] gap-2">
                                <span className="text-terminal-cyan">about</span><span>Display information about me</span>
                                <span className="text-terminal-cyan">skills</span><span>List technical skills</span>
                                <span className="text-terminal-cyan">experience</span><span>Show work experience</span>
                                <span className="text-terminal-cyan">profiles</span><span>Show coding profiles</span>
                                <span className="text-terminal-cyan">resume</span><span>Open printable resume</span>
                                <span className="text-terminal-cyan">clear</span><span>Clear terminal history</span>
                            </div>
                        </div>
                    )
                });
                break;
            case 'about':
                newHistory.push({
                    type: 'output',
                    content: (
                        <div className="space-y-2">
                            <p className="text-xl font-bold text-terminal-cyan">{portfolioData.about.name}</p>
                            <p className="text-terminal-gray">{portfolioData.about.role}</p>
                            <p>{portfolioData.about.intro}</p>
                        </div>
                    )
                });
                break;
            case 'skills':
                newHistory.push({
                    type: 'output',
                    content: (
                        <div className="flex flex-wrap gap-2">
                            {portfolioData.skills.map(skill => (
                                <span key={skill} className="text-terminal-green">[{skill}]</span>
                            ))}
                        </div>
                    )
                });
                break;
            case 'experience':
                newHistory.push({
                    type: 'output',
                    content: (
                        <div className="space-y-4">
                            {portfolioData.experience.map((exp, i) => (
                                <div key={i} className="border-l-2 border-terminal-dim pl-4">
                                    <p className="text-terminal-cyan font-bold">{exp.role} @ {exp.company}</p>
                                    <p className="text-sm text-terminal-dim mb-2">{exp.period}</p>
                                    <ul className="list-disc list-inside space-y-1 text-terminal-gray">
                                        {exp.description.map((desc, j) => (
                                            <li key={j}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )
                });
                break;
            case 'profiles':
                newHistory.push({
                    type: 'output',
                    content: (
                        <div className="space-y-1">
                            {portfolioData.profiles.map((profile, i) => (
                                <div key={i}>
                                    <a href={profile.url} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                                        {profile.name}
                                    </a>
                                </div>
                            ))}
                        </div>
                    )
                });
                break;
            case 'resume':
                newHistory.push({ type: 'output', content: 'Opening resume...' });
                setTimeout(onOpenResume, 500);
                break;
            case 'clear':
                setHistory([]);
                return;
            case '':
                break;
            default:
                newHistory.push({ type: 'error', content: `Command not found: ${cmd}. Type "help" for assistance.` });
        }

        setHistory(newHistory);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
        }
    };

    return (
        <div className="w-full max-w-5xl h-[80vh] bg-terminal-black border border-terminal-dim rounded-lg shadow-2xl overflow-hidden flex flex-col font-mono text-sm md:text-base">
            {/* Title Bar */}
            <div className="bg-terminal-dim/20 border-b border-terminal-dim p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1.5 group">
                        <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer flex items-center justify-center">
                            <X size={8} className="opacity-0 group-hover:opacity-100 text-black" />
                        </div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer flex items-center justify-center">
                            <Minus size={8} className="opacity-0 group-hover:opacity-100 text-black" />
                        </div>
                        <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer flex items-center justify-center">
                            <Maximize2 size={8} className="opacity-0 group-hover:opacity-100 text-black" />
                        </div>
                    </div>          </div>
                <div className="ml-4 flex items-center gap-2 text-terminal-gray text-xs">
                    <TerminalIcon size={14} />
                    <span>ram@portfolio:~</span>
                </div>
            </div>

            {/* Terminal Content */}
            <div
                className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-terminal-dim scrollbar-track-transparent"
                onClick={() => inputRef.current?.focus()}
            >
                <div className="space-y-2">
                    {history.map((entry, index) => (
                        <div key={index} className={`${entry.type === 'error' ? 'text-red-500' : 'text-terminal-green'}`}>
                            {entry.type === 'command' ? (
                                <div className="flex items-center gap-2 text-terminal-cyan">
                                    <span>➜</span>
                                    <span className="text-terminal-green">~</span>
                                    <span className="text-white">{entry.content}</span>
                                </div>
                            ) : (
                                <div className="ml-0">{entry.content}</div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Input Line */}
                <div className="flex items-center gap-2 mt-2 text-terminal-cyan">
                    <span>➜</span>
                    <span className="text-terminal-green">~</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent border-none outline-none text-white caret-terminal-green"
                        autoFocus
                    />
                </div>
                <div ref={bottomRef} />
            </div>
        </div>
    );
};

export default Terminal;
