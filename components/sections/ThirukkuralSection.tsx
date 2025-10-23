"use client"
import { useEffect, useState } from "react"

interface Thirukkural {
    number: number
    line1: string
    line2: string
    translation: string
}

const thirukkuralData: Thirukkural[] = [
    {
        number: 1,
        line1: "அகர முதல எழுத்தெல்லாம் ஆதி",
        line2: "பகவன் முதற்றே உலகு",
        translation: "As the letter A is the first of all letters, so the eternal God is first in the world."
    },
    {
        number: 2,
        line1: "கற்க கசடற கற்பவை கற்றபின்",
        line2: "நிற்க அதற்குத் தக",
        translation: "Learn thoroughly what you learn; after learning, conduct yourself accordingly."
    },
    {
        number: 25,
        line1: "பிறனில் விழையும் பெருமை யிலான",
        line2: "மறனில் மானம் மடி",
        translation: "The immodesty of him who desires another's wife is like the shamelessness of one who begs."
    },
    {
        number: 100,
        line1: "செயற்கரிய யாவுள மற்றொன்று இன்மை",
        line2: "எய்தற்கரிய துண்டோ",
        translation: "Is there anything too hard to accomplish? What cannot be effected by effort?"
    },
    {
        number: 260,
        line1: "இன்சொலால் ஈரம் அளைஇப் படிறிலவாம்",
        line2: "செம்பொருள் கண்டார்வாய்ச் சொல்",
        translation: "The words of those who have seen truth are sweet, full of love, and free from deceit."
    },
    {
        number: 400,
        line1: "அறனறிந்து மூத்த அறிவுடையார் கேண்மை",
        line2: "திறனறிந்து தேர்ந்து கொளல்",
        translation: "Choose the friendship of those who are wise and know the right conduct."
    },
    {
        number: 700,
        line1: "குணமென்னும் குன்றேறி நின்றார் வெகுளி",
        line2: "கணனேறி நின்ற காடு",
        translation: "The anger of the great is like going up a hill and standing on a peak."
    }
]

export default function ThirukkuralSection() {
    const [currentKural, setCurrentKural] = useState<Thirukkural | null>(null)

    useEffect(() => {
        // Get a random kural on component mount
        const randomKural = thirukkuralData[Math.floor(Math.random() * thirukkuralData.length)]
        setCurrentKural(randomKural)
    }, [])

    if (!currentKural) {
        return (
            <section id="thirukkural" className="w-full py-16 bg-background">
                <div className="container mx-auto px-4 text-center">
                    <div className="animate-pulse">Loading Thirukkural...</div>
                </div>
            </section>
        )
    }

    return (
        <section id="thirukkural" className="w-full py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Section Title */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <h2 className="font-bowlby text-4xl md:text-6xl text-center font-normal text-foreground">
                            Thirukkural
                        </h2>
                    </div>

                    {/* Kural Card */}
                    <div className="bg-background border border-border rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300">
                        {/* Kural Number */}
                        <div className="text-sm text-muted-foreground mb-6 font-medium">
                            குறள் {currentKural.number}
                        </div>

                        {/* Tamil Lines */}
                        <div className="space-y-4 mb-6">
                            <p className="text-2xl md:text-3xl font-tamil leading-relaxed text-foreground">
                                {currentKural.line1}
                            </p>
                            <p className="text-2xl md:text-3xl font-tamil leading-relaxed text-foreground">
                                {currentKural.line2}
                            </p>
                        </div>

                        {/* Translation */}
                        <div className="border-t border-border pt-6">
                            <p className="text-lg text-muted-foreground leading-relaxed italic">
                                "{currentKural.translation}"
                            </p>
                        </div>

                        {/* Refresh Hint */}
                        <div className="mt-6 text-sm text-muted-foreground">
                            Refresh the page for a new Thirukkural
                        </div>
                    </div>

                    {/* Description */}
                    <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Ancient Tamil wisdom that guides life with timeless virtues and ethical values
                    </p>
                </div>
            </div>
        </section>
    )
}