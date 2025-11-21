import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Download, X } from 'lucide-react';

const Resume = ({ onClose }) => {
    const { about, experience, skills, profiles } = portfolioData;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900/90 backdrop-blur-sm flex justify-center items-start py-10 print:bg-white print:p-0 print:inset-auto print:static print:block">
            <div className="relative bg-white text-black w-full max-w-4xl p-8 md:p-12 shadow-2xl rounded-lg print:shadow-none print:w-full print:max-w-none print:rounded-none print:p-0">

                {/* No-Print Controls */}
                <div className="absolute top-4 right-4 flex gap-4 print:hidden">
                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                        <Download size={18} />
                    </button>
                    <button
                        onClick={onClose}
                        className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Header */}
                <header className="border-b-2 border-gray-800 pb-6 mb-8 flex justify-between items-start gap-6">
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold uppercase tracking-wider mb-2">{about.name}</h1>
                        <p className="text-xl text-gray-600 font-medium mb-4">{about.role}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            {profiles.map((profile, index) => (
                                <a key={index} href={profile.url} target="_blank" rel="noreferrer" className="hover:text-blue-600 underline">
                                    {profile.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* {about.photoUrl && (
                        <div className="w-32 h-32 shrink-0 overflow-hidden rounded-lg border-2 border-gray-200 print:border-gray-300">
                            <img
                                src={about.photoUrl}
                                alt={about.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )} */}
                </header>

                {/* About / Summary */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold uppercase tracking-wide border-b border-gray-300 mb-4 pb-1">Summary</h2>
                    <p className="text-gray-800 leading-relaxed">
                        {about.intro}
                    </p>
                </section>

                {/* Experience */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold uppercase tracking-wide border-b border-gray-300 mb-4 pb-1">Experience</h2>
                    <div className="space-y-6">
                        {experience.map((job, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="text-xl font-bold">{job.company}</h3>
                                    <span className="text-gray-600 font-medium">{job.period}</span>
                                </div>
                                <p className="text-gray-700 italic mb-2">{job.role}</p>
                                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-800 leading-relaxed">
                                    {job.description.map((desc, i) => (
                                        <li key={i} dangerouslySetInnerHTML={{
                                            __html: desc.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                        }} />
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold uppercase tracking-wide border-b border-gray-300 mb-4 pb-1">Technical Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200 print:border-gray-300">
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Resume;
