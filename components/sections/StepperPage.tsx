// components/sections/StepperPage.tsx
"use client";

import React from 'react';
import Stepper, { Step } from '@/components/Stepper';

const StepperPage = () => {
    return (
        <section id="roadmap" className="w-full py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-climate-crisis text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4">
                        Our Growth Journey
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Watch our strategic roadmap unfold - automatically advancing every 7 seconds
                    </p>
                </div>

                <Stepper
                    initialStep={1}
                    onStepChange={(step) => {
                        console.log('Current step:', step);
                    }}
                    onFinalStepCompleted={() => console.log("Journey completed!")}
                    backButtonText="Previous Year"
                    nextButtonText="Next Year"
                    autoAdvance={true}
                    autoAdvanceDelay={7000} // Change every 7 seconds
                    pauseOnHover={true} // Pause when user hovers
                >
                    <Step>
                        <div className="text-center max-w-4xl mx-auto p-6">
                            <div className="mb-6">
                                <span className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-bold">
                                    2025
                                </span>
                            </div>
                            <h2 className="font-climate-crisis text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-6">
                                Creating Unbreakable Bonds
                            </h2>
                            <div className="bg-card border border-foreground/20 rounded-xl p-8 shadow-lg">
                                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-6">
                                    Building strong, lasting relationships with schools, students, and parents through trust,
                                    transparency, and exceptional educational experiences.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                                    <div className="text-center p-4 bg-foreground/5 rounded-lg">
                                        <div className="text-3xl mb-2">🏫</div>
                                        <h3 className="font-frijole text-lg mb-2">Schools</h3>
                                        <p className="text-sm text-foreground/70">Partnership & Collaboration</p>
                                    </div>
                                    <div className="text-center p-4 bg-foreground/5 rounded-lg">
                                        <div className="text-3xl mb-2">🎓</div>
                                        <h3 className="font-frijole text-lg mb-2">Students</h3>
                                        <p className="text-sm text-foreground/70">Growth & Development</p>
                                    </div>
                                    <div className="text-center p-4 bg-foreground/5 rounded-lg">
                                        <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
                                        <h3 className="font-frijole text-lg mb-2">Parents</h3>
                                        <p className="text-sm text-foreground/70">Engagement & Support</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Step>

                    <Step>
                        <div className="text-center max-w-4xl mx-auto p-6">
                            <div className="mb-6">
                                <span className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-bold">
                                    2026
                                </span>
                            </div>
                            <h2 className="font-climate-crisis text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-6">
                                Academic Expansion
                            </h2>
                            <div className="bg-card border border-foreground/20 rounded-xl p-8 shadow-lg">
                                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-6">
                                    Expanding our comprehensive curriculum with innovative courses designed to enhance 
                                    student learning and prepare them for future challenges.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                    <div className="text-left p-6 bg-foreground/5 rounded-lg">
                                        <h3 className="font-frijole text-xl mb-4">Course Development</h3>
                                        <ul className="space-y-2 text-foreground/70">
                                            <li>• Advanced STEM Programs</li>
                                            <li>• Creative Arts Integration</li>
                                            <li>• Digital Literacy Courses</li>
                                            <li>• Career-focused Training</li>
                                        </ul>
                                    </div>
                                    <div className="text-left p-6 bg-foreground/5 rounded-lg">
                                        <h3 className="font-frijole text-xl mb-4">Curriculum Enhancement</h3>
                                        <ul className="space-y-2 text-foreground/70">
                                            <li>• Project-based Learning</li>
                                            <li>• Industry Partnerships</li>
                                            <li>• Skill Development Modules</li>
                                            <li>• Global Standards Alignment</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Step>

                    <Step>
                        <div className="text-center max-w-4xl mx-auto p-6">
                            <div className="mb-6">
                                <span className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-bold">
                                    2027
                                </span>
                            </div>
                            <h2 className="font-climate-crisis text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-6">
                                Nationwide Expansion
                            </h2>
                            <div className="bg-card border border-foreground/20 rounded-xl p-8 shadow-lg">
                                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-6">
                                    Establishing branches and franchise networks across India to make quality education
                                    accessible to students in every corner of the country.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                    <div className="text-center">
                                        <div className="text-4xl mb-4">🏢</div>
                                        <h3 className="font-frijole text-xl mb-3">Branches</h3>
                                        <p className="text-foreground/70">
                                            Company-owned centers maintaining quality standards
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl mb-4">🤝</div>
                                        <h3 className="font-frijole text-xl mb-3">Franchisee</h3>
                                        <p className="text-foreground/70">
                                            Partner with local entrepreneurs to expand reach
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Step>

                    <Step>
                        <div className="text-center max-w-4xl mx-auto p-6">
                            <div className="mb-6">
                                <span className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-bold">
                                    2028
                                </span>
                            </div>
                            <h2 className="font-climate-crisis text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-6">
                                Educational Revolution
                            </h2>
                            <div className="bg-card border border-foreground/20 rounded-xl p-8 shadow-lg">
                                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-6">
                                    Building a new educational system that transforms traditional learning methods and 
                                    makes quality education accessible to everyone.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                                    <div className="text-center p-4">
                                        <div className="text-3xl mb-3">🌍</div>
                                        <h3 className="font-frijole text-lg mb-2">Inclusive</h3>
                                        <p className="text-sm text-foreground/70">Education for all backgrounds</p>
                                    </div>
                                    <div className="text-center p-4">
                                        <div className="text-3xl mb-3">💡</div>
                                        <h3 className="font-frijole text-lg mb-2">Innovative</h3>
                                        <p className="text-sm text-foreground/70">Modern teaching methodologies</p>
                                    </div>
                                    <div className="text-center p-4">
                                        <div className="text-3xl mb-3">🚀</div>
                                        <h3 className="font-frijole text-lg mb-2">Future-ready</h3>
                                        <p className="text-sm text-foreground/70">Preparing for tomorrow's challenges</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Step>
                </Stepper>
            </div>
        </section>
    );
}

export default StepperPage;