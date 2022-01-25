let pronoun = ["the", "our"];
let adj = ["Able", "Abnormal", "Academic", "Adorable", "Attractive", "Attentive", "Authentic", "Bad", "Basic", "Beautiful", "Better", "Bitter", "Brave", "Bright", "Brief", "Busy", "Calm", "Careful", "Clean", "Colorful", "Comfortable", "Curious", "Dangerous", "Delighted", "Delicious", "Difficult", "Disgusting", "Dishonest", "Eager", "Efficient", "Elaborate", "Elegant", "Exotic", "Faithful", "Famous", "Fantastic", "Fearful", "Frequent", "Generous", "Glorious", "Gloomy", "Grateful", "Guilty", "Handsome", "Happy", "Harmful", "Honorable", "Honest", "Idealistic", "Ignorant", "Imaginary", "Immediate", "Intelligent", "Jealous", "Joyful", "Kind", "Knowledgeable", "Large", "Literate", "Lovely", "Loyal", "Luxurious", "Magical", "Magnificent", "Mature", "Modern", "Mysterious", "Narrow", "Natural", "Necessary", "Obedient", "Obvious", "Optimistic", "Passionate", "Peaceful", "Polite", "Proud", "Quick", "Quiet", "Reasonable", "Real", "Remarkable", "Romantic", "Sad", "Sincere", "Successful", "Sympathetic", "Terrible", "Thankful", "Thoughtful", "Unconscious", "Unknown", "Unique", "Vacant", "Victorious", "Valuable", "Wonderful", "Wrong", "Young", "Zealous"
];
let noun = ["Acceptance", "Action", "Addition", "Admiration", "Adventure", "Advice", "Agreement", "Allowance", "Anger", "Appreciation", "Attention", "Attraction", "Base", "Beauty", "Belief", "Book", "Care", "Centre", "Character", "Class", "Cleanness", "Color", "Comfort", "Commerce", "Conclusion", "Confidence", "Consideration", "Construction", "Continuity", "Courage", "Critic", "Danger", "Debate", "Deception", "Decision", "Definition", "Description", "Destruction", "Difference", "Education", "Election", "Energy", "Favor", "Fear", "Facility", "Fool", "Force", "Generation", "Government", "Gradation", "Guidance", "Hesitation", "Hope", "Help", "Ignorance", "Imitation", "Inclusion", "Information", "Insistence", "Instruction", "Invention", "Joint", "Joy", "Knowledge", "Laughter", "Matter", "Measure", "Memory", "Mind", "Nature", "Need", "Negligence", "Obedience", "Obligation", "Observation", "Occupation", "Offense", "Operation", "Opposition", "Organization", "Passage", "Permission", "Persuasion", "Pleasure", "Pollution", "Preference", "Prevention", "Production", "Reduction", "Reference", "Reflection", "Reliance", "Satisfaction", "Selection", "Success", "Tolerance", "Trust", "Valuation", "Verification", "Wisdom"
];
let domain = [".com", ".net", ".info", ".hack", ".org", ".gob"];

console.log(
    pronoun[Math.floor(Math.random() * pronoun.length)] +
    adj[Math.floor(Math.random() * adj.length)] +
    noun[Math.floor(Math.random() * noun.length)] +
    domain[Math.floor(Math.random() * domain.length)]
);

