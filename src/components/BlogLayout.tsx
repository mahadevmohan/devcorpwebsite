"use client";

import { ReactNode } from "react";
import SmartBackButton from "./SmartBackButton";

interface BlogLayoutProps {
    title: string;
    excerpt?: string;
    author: string;
    publishedAt: string;
    readTime?: number;
    children: ReactNode;
}

export default function BlogLayout({
    title,
    excerpt,
    author,
    publishedAt,
    readTime,
    children
}: BlogLayoutProps) {
    return (
        <main className="min-h-screen bg-seasalt">
            {/* Hero Section */}
            <section className="bg-black text-seasalt py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-8">
                        <SmartBackButton />
                    </div>
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            {title}
                        </h1>
                        {excerpt && (
                            <p className="text-xl text-silver mb-8 leading-relaxed">
                                {excerpt}
                            </p>
                        )}
                        <div className="flex items-center gap-6 text-sm text-silver">
                            <div className="flex items-center gap-2">
                                {author.includes(' and ') ? (
                                    // Multiple authors - show separate icons with names
                                    <>
                                        {author.split(' and ').map((authorName, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <span className="w-8 h-8 bg-davy-gray rounded-full flex items-center justify-center text-xs font-medium">
                                                    {authorName.trim().split(' ').map(n => n[0]).join('')}
                                                </span>
                                                <span>{authorName.trim()}</span>
                                            </div>
                                        ))}
                                    </>
                                ) : (
                                    // Single author - original logic
                                    <>
                                        <span className="w-8 h-8 bg-davy-gray rounded-full flex items-center justify-center text-xs font-medium">
                                            {author.split(' ').map(n => n[0]).join('')}
                                        </span>
                                        <span>{author}</span>
                                    </>
                                )}
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                <time dateTime={publishedAt}>
                                    {new Date(publishedAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                            </div>
                            {readTime && (
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                    <span>{readTime} min read</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Main Content */}
                        <article className="lg:col-span-3">
                            <div className="prose prose-lg prose-gray max-w-none">
                                {children}
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-8">
                                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                                    <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                                    <nav className="space-y-2">
                                        <button
                                            onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="block w-full text-left text-sm text-gray-600 hover:text-black transition-colors cursor-pointer"
                                        >
                                            Project Overview
                                        </button>
                                        <button
                                            onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="block w-full text-left text-sm text-gray-600 hover:text-black transition-colors cursor-pointer"
                                        >
                                            Architecture & Tech Stack
                                        </button>
                                        <button
                                            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="block w-full text-left text-sm text-gray-600 hover:text-black transition-colors cursor-pointer"
                                        >
                                            File Management System
                                        </button>
                                        <button
                                            onClick={() => document.getElementById('status')?.scrollIntoView({ behavior: 'smooth' })}
                                            className="block w-full text-left text-sm text-gray-600 hover:text-black transition-colors cursor-pointer"
                                        >
                                            Project Summary
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
