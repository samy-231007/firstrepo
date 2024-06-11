// 1. ANWENDUNGSZUSTAND
const zustand = {
    fragen: [
        {
            "frage": "Was ist die Hauptstadt von Deutschland?",
            "optionen": ["Berlin", "München", "Hamburg", "Köln"],
            "antwort": "Berlin"
        },
        {
            "frage": "Wer hat die Relativitätstheorie entwickelt?",
            "optionen": ["Isaac Newton", "Albert Einstein", "Nikola Tesla", "Thomas Edison"],
            "antwort": "Albert Einstein"
        },
        {
            "frage": "Was ist der größte Planet in unserem Sonnensystem?",
            "optionen": ["Erde", "Mars", "Jupiter", "Saturn"],
            "antwort": "Jupiter"
        },
        {
            "frage": "Wer hat das Buch '1984' geschrieben?",
            "optionen": ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Stephen King"],
            "antwort": "George Orwell"
        },
        {
            "frage": "Was ist die Quadratwurzel von 81?",
            "optionen": ["7", "8", "9", "10"],
            "antwort": "9"
        },
        {
            "frage": "Wer hat das World Wide Web erfunden?",
            "optionen": ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"],
            "antwort": "Tim Berners-Lee"
        },
        {
            "frage": "In welchem Jahr fiel die Berliner Mauer?",
            "optionen": ["1987", "1989", "1991", "1993"],
            "antwort": "1989"
        },
        {
            "frage": "Wer hat das iPhone erfunden?",
            "optionen": ["Microsoft", "Apple", "Samsung", "Nokia"],
            "antwort": "Apple"
        },
        {
            "frage": "Wer hat das Gemälde 'Die Mona Lisa' gemalt?",
            "optionen": ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            "antwort": "Leonardo da Vinci"
        },
        {
            "frage": "Was ist der höchste Berg der Welt?",
            "optionen": ["K2", "Mount Everest", "Kilimandscharo", "Mont Blanc"],
            "antwort": "Mount Everest"
        },
        {
            "frage": "Wer hat das Buch 'Der Herr der Ringe' geschrieben?",
            "optionen": ["J.K. Rowling", "George R.R. Martin", "J.R.R. Tolkien", "Stephen King"],
            "antwort": "J.R.R. Tolkien"
        },
        {
            "frage": "Was ist der kleinste Kontinent der Welt?",
            "optionen": ["Afrika", "Australien", "Antarktis", "Europa"],
            "antwort": "Australien"
        },
        {
            "frage": "Wer hat die Glühbirne erfunden?",
            "optionen": ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Benjamin Franklin"],
            "antwort": "Thomas Edison"
        },
        {
            "frage": "In welchem Jahr wurde das Internet öffentlich zugänglich?",
            "optionen": ["1983", "1991", "1995", "2000"],
            "antwort": "1991"
        }
    ],
    aktuelleFrageIndex: 0,
    punktzahl: 0
};

// 2. ZUGRIFFS- UND MUTATIONSFUNKTIONEN
function getAktuelleFrage() {
    return zustand.fragen[zustand.aktuelleFrageIndex];
}

function erhoehePunktzahl() {
    zustand.punktzahl++;
}

function naechsteFrage() {
    if (zustand.aktuelleFrageIndex < zustand.fragen.length - 1) {
        zustand.aktuelleFrageIndex++;
    }
}

// 3. DOM-Referenzen
const frageElement = document.getElementById('aktuelle-frage');
const auswahlElement = document.getElementById('auswahl');
const punktestandElement = document.getElementById('punktestand');
const submitButton = document.getElementById('submit-btn');

// 4. DOM-Erstellungsfunktionen
function createAuswahlOption(option) {
    const div = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');

    input.type = 'radio';
    input.name = 'answer';
    input.value = option;
    label.innerText = option;

    div.appendChild(input);
    div.appendChild(label);
    return div;
}

// 5. RENDER-FUNKTIONEN
function renderFrage() {
    const aktuelleFrage = getAktuelleFrage();

    frageElement.innerText = aktuelleFrage.frage;
    auswahlElement.innerHTML = '';

    aktuelleFrage.optionen.forEach(option => {
        auswahlElement.appendChild(createAuswahlOption(option));
    });
}

function renderPunktzahl() {
    punktestandElement.innerText = `Punktestand: ${zustand.punktzahl} / ${zustand.fragen.length}`;
}

// 6. EREIGNISHANDLER
function onAbschicken() {
    const ausgewaehlteOption = document.querySelector('input[name="answer"]:checked');
    if (ausgewaehlteOption && ausgewaehlteOption.value === getAktuelleFrage().antwort) {
        erhoehePunktzahl();
        renderPunktzahl();

        if (zustand.aktuelleFrageIndex < zustand.fragen.length - 1) {
            naechsteFrage();
            renderFrage();
        } else {
            alert('Quiz beendet! Dein Punktestand: ' + zustand.punktzahl);
            submitButton.disabled = true;
        }

    } else {
        alert('Falsche Antwort!');
    }
}

// 7. INIT-BINDINGS
document.addEventListener("DOMContentLoaded", () => {
    renderFrage();
    renderPunktzahl();

    submitButton.addEventListener('click', () => {
        onAbschicken();
    });
});

// 8. INITIAL RENDER
renderFrage();
renderPunktzahl();
