const quizSets = {
  "Trade Theory": [
  {
    question: "What is the function of neutral path in AC supply system for appliances?",
    options: ["Provides current return path", "Provides voltage level constant", "Reduces voltage drop in wiring", "Maintains lead current constant"],
    answer: "Provides current return path"
  },
  {
    question: "Which error if the energy meter disc rotating continuously on no load?",
    options: ["Speed error", "Phase error", "Frietien error", "Creeping error"],
    answer: "Creeping error"
  },
  {
    question: "What is the formula to find voltage drop of a AC single phase wiring circuit?",
    options: ["Voltage drop - IR volt", "Voltage drop - I²R volt", "Voltage drop I/R volt", "Voltage drop-IR/2 volt"],
    answer: "Voltage drop - IR volt"
  },
  {
    question: "What is the term for the time taken by a fuse to interrupt the circuit in fault?",
    options: ["Time faster", "Fusing factor", "Cut-off factor", "Fusing current"],
    answer: "Cut-off factor"
  },
  {
    question: "What is the purpose of the fuse cut out provided at the incoming power supply?",
    options: ["To ensure the line is not over loaded", "To maintain the stabilised supply voltage", "To protect the circuit from the leakage current", "To protect the human beings from electric shock"],
    answer: "To ensure the line is not over loaded"
  },
  {
    question: "What indicates the shape of a BH curve (Hysteresis loop) of material?",
    options: ["Reluctance of the material", "Field Intensity of the substance", "Magnetic properties of the material", "Pulling power of the magnetic material"],
    answer: "Magnetic properties of the material"
  },
  {
    question: "Why system earthing is different in utilization than equipment earthing?",
    options: ["It protects human only", "It protects from all circuit faults", "It is associated with current carrying conductors", "It is connected to the non current carrying metal work"],
    answer: "It is associated with current carrying conductors"
  },
  {
    question: "What is reason AC table fan runs very hot?",
    options: ["Defective starting winding", "Defective running winding", "Defective capacitor", "Wornout bushes"],
    answer: "Defective capacitor"
  },
  {
    question: "Which law secondary cell works?",
    options: ["Lenz's law", "Joule's law", "Faraday's laws of electrolysis", "Faraday's laws of electromagnetic induction"],
    answer: "Faraday's laws of electrolysis"
  },
  {
    question: "Which quantity is measured by an electrodynamo type instrument?",
    options: ["Power", "Current", "Voltage", "Resistance"],
    answer: "Power"
  },
  {
    question: "Which alloy used in electric lamp as filament?",
    options: ["Cobalt", "Vanadium", "Tungsten", "Silicon"],
    answer: "Tungsten"
  },
  {
    question: "Which load condition the phase currents of a 3 phase system are different?",
    options: ["At full load", "At no load", "At balanced load", "At unbalanced load"],
    answer: "At unbalanced load"
  },
  {
    question: "What is the defect in a single phase pump motor if it runs with slow speed?",
    options: ["Defective capacitor", "Open starting winding", "Short in starting winding", "Short in running winding"],
    answer: "Defective capacitor"
  },
  {
    question: "Which electrical equipment 'L' series type MCBs are used?",
    options: ["Geysers", "Locomotives", "Halogen lamps", "Air conditioners"],
    answer: "Geysers"
  },
  {
    question: "What is the S.I unit of luminous intensity?",
    options: ["Lux", "Lumen", "Candela", "Steradian"],
    answer: "Candela"
  },
  {
    question: "Which is the semiconductor material?",
    options: ["Eureka", "Ebonite", "Manganin", "Germanium"],
    answer: "Germanium"
  },
  {
    question: "Which type of circuit breaker is used above 100 A current rating?",
    options: ["Miniature Circuit Breaker (MCB)", "Earth Leakage Circuit Breaker (ELCB)", "Moulded Case Circuit Breaker (MCCB)", "Residual Current Circuit Breaker (RCCB)"],
    answer: "Moulded Case Circuit Breaker (MCCB)"
  },
  {
    question: "Which is the diamagnetic substance?",
    options: ["Wood", "Nickel", "Platinum", "Manganese"],
    answer: "Wood"
  },
  {
    question: "What is the indication of neon polarity indicator used for checking A.C. supply?",
    options: ["Both electrodes will glow", "Only one electrode will glow", "Both electrodes will be flickering", "One electrode will glow and another will be flickering"],
    answer: "Both electrodes will glow"
  },
  {
    question: "Which step of the 5S-concept refers to Standardization?",
    options: ["Step-1", "Step-2", "Step-3", "Step-4"],
    answer: "Step-4"
  },
  {
    question: "How the earth resistance can be reduced?",
    options: ["Providing double earthing", "Reducing the pit depth for earthing", "Increasing the length of the electrodes", "Decreasing the length of the electrodes"],
    answer: "Increasing the length of the electrodes"
  },
  {
    question: "Which factor determines the value of capacitance in a capacitor?",
    options: ["Area of the plates", "Shape of the plates", "Material of the plates", "Thickness of the plates"],
    answer: "Area of the plates"
  },
  {
    question: "What is the power factor in a 3 phase power measurement of two wattmeters showing equal readings?",
    options: ["1", "0", "0.5", "0.8"],
    answer: "1"
  },
  {
    question: "Which force is required to move the pointer from zero position in an indicating instrument?",
    options: ["Centring force", "Deflecting force", "Air friction damping", "Eddy current damping"],
    answer: "Deflecting force"
  },
  {
    question: "Why the core of current transformer is having low reactance and low core losses?",
    options: ["To minimise the burden", "To maintain constant output", "To prevent high static shield", "To minimise the error in reading"],
    answer: "To minimise the error in reading"
  },
  {
    question: "What is the effect if one cell is connected with reverse polarity in a parallel combination circuit?",
    options: ["Voltage become zero", "Become open circuit", "Will get short circuited", "No effect will function normally"],
    answer: "Will get short circuited"
  },
  {
    question: "What is the cause of deterioration of transformer oil?",
    options: ["Over load", "Short circuit", "Due to moisture", "Long time use"],
    answer: "Due to moisture"
  },
  {
    question: "Calculate the apparent power in KVA of 3 phase 415V, 50 Hz. star system. if the line current (IL) is 16A at 0.8 power factor.",
    options: ["15.2 KVA", "11.5 KVA", "9.2 KVA", "5.3 KVA"],
    answer: "11.5 KVA"
  },
  {
    question: "Which instrument is an example of an integrating instrument?",
    options: ["AC voltmeter", "DC voltmeter", "Energy meter", "Tangent galvanometer"],
    answer: "Energy meter"
  },
  {
    question: "What is the effect of buckling defect in a lead acid battery?",
    options: ["Bending of the electrodes", "Reducing the strength of electrolyte", "Making short between the electrodes", "Increasing the Internal resistance"],
    answer: "Bending of the electrodes"
  },
  {
    question: "Which source of measuring error is caused by the effect of magnetic fields?",
    options: ["Device error", "Human error", "Influence error", "Switching error"],
    answer: "Influence error"
  },
  {
    question: "How to control harmonic distortions in neutral connections as per IE rule?",
    options: ["Earthing through Impedance", "Providing by plate earthing", "Increasing conductor size", "Providing parallel earthing"],
    answer: "Earthing through Impedance"
  },
  {
    question: "What is the minimum size of copper earth continuity conductor used in single phase domestic wiring as per BIS?",
    options: ["3 Sq.mm", "3.5 Sq.mm", "2.5 Sq.mm", "1.5 Sq.mm"],
    answer: "1.5 Sq.mm"
  },
  {
    question: "Which is the position to use the instrument provided with spring control?",
    options: ["Any position", "Vertical position only", "Inclined position only", "Horizontal position only"],
    answer: "Any position"
  },
  {
    question: "What is the function of rotary switch in food mixer?",
    options: ["Over load protection", "For reverse rotation", "Over current protection", "Speed selection"],
    answer: "Speed selection"
  },
  {
      question: "What is the name of the soldering method?",
      image: "https://ohmlaws.github.io/assets/img/posts/theory/m3-q43.png",
      options: ["Dip soldering", "Soldering iron", "Soldering gun", "Soldering with flame"],
      answer: "Soldering gun"      
  },
  {
      question: "Calculate the unknown resistance 'RDC' in the Wheatstone bridge circuit, if PAB = 400 ohm, QBC = 200 ohm and SAD = 12 ohm at balanced condition.",
      image: "https://ohmlaws.github.io/assets/img/posts/theory/m4-q22.png",
      options: ["4 ohm", "6 ohm", "8 ohm", "12 ohm"],
      answer: "6 ohm"      
  },
  {
      question: "What is the name of the circuit?",
      image: "https://ohmlaws.github.io/assets/img/posts/theory/m12-q17.png",
      options: ["Electronic fan regulator", "Electronic voltage multiplier", "Electronic voltage stabilizer", "Electronic triggering circuit of SCR"],
      answer: "Electronic fan regulator"      
  }
],
  "Employability Skills": [
    {
      question: "The interviewer asked Rahul to wait for a few days. What can Rahul do after few days?",
      options: [
        "Follow up with the employer on phone call or email",
        "Give up his hope",
        "Never call",
        "Meet his friends"
      ],
      answer: "Follow up with the employer on phone call or email"
    },
    {
      question: "Simple selling techniques every salesperson should know and practice are",
      options: [
        "Customer",
        "Cross selling",
        "Lying",
        "Buying"
      ],
      answer: "Cross selling"
    },
    {
      question: "Sam opened a new shop. Which of these methods can he use to receive payments into his account?",
      options: [
        "Money order",
        "QR code",
        "Loan",
        "Bank deposit"
      ],
      answer: "QR code"
    },
    {
      question: "_____ cost increases or decreases depending on how much we produce or sell.",
      options: [
        "Variable",
        "Fixed",
        "Total",
        "Maintenance"
      ],
      answer: "Variable"
    },
    {
      question: "Arunima has completed an apprenticeship Training on NAPS. She will be getting a ____ on completion.",
      options: [
        "Certificate",
        "Salary",
        "Stipend",
        "Scholarship"
      ],
      answer: "Certificate"
    },
    {
      question: "Verbs tell the action of the ____",
      options: [
        "Cow",
        "Change",
        "Act",
        "Naming words"
      ],
      answer: "Naming words"
    },
    {
      question: "Creating posters can give a lot of clarity on the ____.",
      options: [
        "Career pathway",
        "Ability",
        "Work",
        "Interest"
      ],
      answer: "Career pathway"
    },
    {
      question: "When you ask someone something it is ____",
      options: [
        "Answer",
        "Blank",
        "Question",
        "Response"
      ],
      answer: "Question"
    },
    {
      question: "If a person receives harsh, unfair and very negative criticism, they feel very unhappy. What type of criticism is this?",
      options: [
        "Helpful criticism",
        "Fair Criticism",
        "Unfair criticism",
        "None"
      ],
      answer: "Unfair criticism"
    },
    {
      question: "Alexa is a ____ assistant",
      options: [
        "Digital voice controlled",
        "Office Assistant",
        "Home Assistant",
        "None of the above"
      ],
      answer: "Digital voice controlled"
    },
    {
      question: "Which of the following Website is to learn new languages for free?",
      options: [
        "Linkedin",
        "Duolingo",
        "Codeacademy",
        "All of the above"
      ],
      answer: "Duolingo"
    },
    {
      question: "On a bank holiday, which of these methods cannot be used by Shahab for money transfer?",
      options: [
        "BHIM app",
        "Google pay",
        "Bank deposit",
        "Money transfer"
      ],
      answer: "Bank deposit"
    },
    {
      question: "Argument or disagreement between two groups of people is called ____",
      options: [
        "Teamwork",
        "Conflict",
        "Happiness",
        "None"
      ],
      answer: "Conflict"
    },
    {
      question: "An employee is someone who_____",
      options: [
        "Goes to school to study",
        "Does not work",
        "Works for a salary",
        "Goes to play"
      ],
      answer: "Works for a salary"
    },
    {
      question: "Subir wants to celebrate all festivals at the workplace. This shows that he is",
      options: [
        "Inclusive",
        "Productive",
        "Disciplined",
        "Silent"
      ],
      answer: "Inclusive"
    },
    {
      question: "Salesperson tells the customer the offer exists today only. This sales technique is called",
      options: [
        "Now or never close",
        "Close down",
        "Question",
        "Lock down"
      ],
      answer: "Now or never close"
    },
    {
      question: "Which of the following are the top benefits of using the internet?",
      options: [
        "Speed of communication",
        "Safety",
        "Access to information",
        "All of the above"
      ],
      answer: "All of the above"
    },
    {
      question: "One must choose the career path based on the changing",
      options: [
        "Interests",
        "Abilities",
        "Cities",
        "Market demands"
      ],
      answer: "Market demands"
    },
    {
      question: "Customer's needs can be understood through",
      options: [
        "Customer Survey",
        "Selling",
        "Talking to our family",
        "Customer service"
      ],
      answer: "Customer Survey"
    },
    {
      question: "The ____ is a few words that can quickly tell what the email is about.",
      options: [
        "Compose",
        "Subject",
        "Inbox",
        "ID"
      ],
      answer: "Subject"
    },
    {
      question: "People can hear the emotions and see our facial expression when we .....",
      options: [
        "Speak",
        "Listen",
        "Taste",
        "See"
      ],
      answer: "Speak"
    },
    {
      question: "NAPS is a scheme by the Government of India to provide apprenticeship training through the",
      options: [
        "Employers",
        "Teachers",
        "Trainers",
        "Professors"
      ],
      answer: "Employers"
    },
    {
      question: "Surya is speaking Hindi in a team meeting where 4 of 10 members don’t understand. What should Surya not do?",
      options: [
        "Meeting his team",
        "Talking",
        "Remove 4 members",
        "Speak In Hindi"
      ],
      answer: "Speak In Hindi"
    },
    {
      question: "Raju is studying to be a chef. Which place is suitable for him to do industry visit?",
      options: [
        "Bread factory",
        "Paint factory",
        "Toy factory",
        "Chemical factory"
      ],
      answer: "Bread factory"
    },
    {
      question: "We need an _____ and a search engine to access the information on the web.",
      options: [
        "Internet connection",
        "Mouse",
        "Data cable",
        "Keyboard"
      ],
      answer: "Internet connection"
    }  
  ],
  "Workshop Calculation": [
    {
      question: "What is the distance from the center to the circumference of a circle?",
      options: ["Diameter", "Radius", "Arc", "Chord"],
      answer: "Radius"
    },
    {
      question: "Convert −273°C (Centigrade) into Kelvin scale?",
      options: ["0°K", "1°K", "2°K", "3°K"],
      answer: "0°K"
    },
    {
      question: "What is the work done in unit time?",
      options: ["Power", "Energy", "Force", "Acceleration"],
      answer: "Power"
    },
    {
      question: "What is called if a body does not change its position with respect to its surroundings?",
      options: ["Body at motion", "Body at rest", "Speed", "Velocity"],
      answer: "Body at rest"
    },
    {
      question: "Which is an example of a first-order lever?",
      options: ["Wheelbarrow", "A pair of scissors", "Fire tongs", "Lime squeezer"],
      answer: "A pair of scissors"
    },
    {
      question: "How many millimeters are there in 1 inch?",
      options: ["24.5 mm", "25.4 mm", "2.54 mm", "2.45 mm"],
      answer: "25.4 mm"
    }
   ],
    "Engineering Drawing": [
    {
      question: "What is this symbol called?",
      image: "https://res.cloudinary.com/rspoc/image/upload/w_620,h_413,c_crop,c_pad,b_white,f_auto,q_auto/dpr_auto/v1731590971/RS%20CONTENTFUL/Discovery/Other%20image%20assets/Electrical%20Symbols/Electromechanical%20Symbols/42971_RS_000869_H3_Electromechanical_Symbol_Bell-01.png",
      options: ["LED light", "Neon lamp", "Electric bell", "Buzzer"],
      answer: "Electric bell"
    },
    {
      question: "Identify the tool",
      image: "https://iti.online2study.in/storage/questions/1742554775.JPG",
      options: ["Gimlet", "Pincer", "Hammer", "Mallet"],
      answer: "Mallet"
    },
    {
      question: "Identify the conventional symbol of material",
      image: "https://iti.online2study.in/storage/questions/1742554656.JPG",
      options: ["Lead", "Glass", "Wood", "Paper"],
      answer: "Wood"
    },
    {
      question: "Identify the line 'b'",
      image: "https://iti.online2study.in/storage/questions/1742554682.JPG",
      options: ["Dimension line", "Extension line", "Leader line", "Termination of dimension line"],
      answer: "Dimension line"
    },
    {
      question: "Identify the name of the instrument",
      image: "https://iti.online2study.in/storage/questions/1742553399.JPG",
      options: ["Set square", "Protractor", "French curve", "T'square"],
      answer: "Protractor"
    },
    {
    question: "Identify this conventional symbol of material",
      image: "https://iti.online2study.in/storage/questions/1742553484.JPG",
      options: ["Concrete", "Glass", "Asbestos", "Water"],
      answer: "Water"
      }    
  ]
};
