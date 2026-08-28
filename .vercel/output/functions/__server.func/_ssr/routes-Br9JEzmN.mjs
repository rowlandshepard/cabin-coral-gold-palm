import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as BookOpen, i as Check, r as RotateCcw, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Br9JEzmN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var QUESTIONS = [
	{
		id: "L1-01",
		lecture: "L1",
		tag: "L1 1 A",
		type: "mc",
		prompt: "Anatomy is best defined as:",
		choices: [
			"The study of internal and external structures",
			"The study of how structures function",
			"The study of disease only",
			"The study of chemistry of life"
		],
		answer: 0,
		accept: ["study of internal and external structures", "study of structures"],
		explain: "Lecture 1: Anatomy = study of internal and external structures. Structure determines function."
	},
	{
		id: "L1-02",
		lecture: "L1",
		tag: "L1 2 A",
		type: "mc",
		prompt: "Physiology is best defined as:",
		choices: [
			"Naming body regions",
			"The study of how anatomical structures function",
			"Imaging only",
			"Measuring body mass"
		],
		answer: 1,
		accept: ["how anatomical structures function", "function of structures"],
		explain: "Physiology is the study of how anatomical structures function."
	},
	{
		id: "L1-03",
		lecture: "L1",
		tag: "L1 3 A",
		type: "short",
		prompt: "Define congenital.",
		accept: [
			"present from birth",
			"present at birth",
			"disease or condition present from birth"
		],
		explain: "Situs inversus example: congenital = a disease or condition present from birth."
	},
	{
		id: "L1-04",
		lecture: "L1",
		tag: "L1 4 A",
		type: "short",
		prompt: "Define homeostasis.",
		accept: [
			"maintaining a stable internal environment",
			"stable internal environment",
			"keeping internal conditions stable"
		],
		explain: "Homeostasis is maintaining a relatively stable internal environment despite external change."
	},
	{
		id: "L1-05",
		lecture: "L1",
		tag: "L1 5 A",
		type: "mc",
		prompt: "A person lying face up is in the _____ position.",
		choices: [
			"Prone",
			"Supine",
			"Lateral",
			"Fowler"
		],
		answer: 1,
		accept: ["supine"],
		explain: "Supine = face up. Prone = face down."
	},
	{
		id: "L1-06",
		lecture: "L1",
		tag: "L1 6 A",
		type: "mc",
		prompt: "A person lying face down is in the _____ position.",
		choices: [
			"Supine",
			"Prone",
			"Anatomical",
			"Oblique"
		],
		answer: 1,
		accept: ["prone"],
		explain: "Prone = face down."
	},
	{
		id: "L1-07",
		lecture: "L1",
		tag: "L1 7 A",
		type: "mc",
		prompt: "Which directional term means toward the head / above?",
		choices: [
			"Inferior",
			"Superior",
			"Distal",
			"Deep"
		],
		answer: 1,
		accept: ["superior"],
		explain: "Superior = above / toward the head. Inferior = below / toward the feet."
	},
	{
		id: "L1-08",
		lecture: "L1",
		tag: "L1 8 A",
		type: "mc",
		prompt: "Anterior is closest in meaning to:",
		choices: [
			"Back / dorsal",
			"Front / ventral",
			"Farther from trunk",
			"Toward midline"
		],
		answer: 1,
		accept: ["front", "ventral"],
		explain: "Anterior = front. Posterior = back."
	},
	{
		id: "L1-09",
		lecture: "L1",
		tag: "L1 9 A",
		type: "mc",
		prompt: "The elbow is _____ to the wrist.",
		choices: [
			"Distal",
			"Proximal",
			"Lateral",
			"Superficial"
		],
		answer: 1,
		accept: ["proximal"],
		explain: "Proximal = closer to the trunk attachment. Distal = farther from the trunk."
	},
	{
		id: "L1-10",
		lecture: "L1",
		tag: "L1 10 C",
		type: "mc",
		prompt: "Which plane is evaluated during a CT scan?",
		choices: [
			"Frontal (coronal)",
			"Sagittal",
			"Transverse (horizontal)",
			"Oblique only"
		],
		answer: 2,
		accept: ["transverse", "horizontal"],
		explain: "CT slices the body in transverse (axial/horizontal) planes."
	},
	{
		id: "L1-11",
		lecture: "L1",
		tag: "L1 11 A",
		type: "mc",
		prompt: "A frontal (coronal) plane divides the body into:",
		choices: [
			"Right and left",
			"Superior and inferior",
			"Anterior and posterior",
			"Proximal and distal"
		],
		answer: 2,
		accept: ["anterior and posterior", "front and back"],
		explain: "Frontal/coronal = front vs back. Sagittal = right vs left. Transverse = top vs bottom."
	},
	{
		id: "L1-12",
		lecture: "L1",
		tag: "L1 12 A",
		type: "short",
		prompt: "What is the smallest living unit of the body?",
		accept: [
			"cell",
			"the cell",
			"cells"
		],
		explain: "Cells are the smallest living unit. Atoms/molecules/electrolytes are not living."
	},
	{
		id: "L1-13",
		lecture: "L1",
		tag: "L1 13 A",
		type: "short",
		prompt: "How do we obtain electrolytes?",
		accept: [
			"from food",
			"from the food we eat",
			"diet",
			"food"
		],
		explain: "Electrolytes (charged atoms such as Na+, K+) and organic molecules come from food."
	},
	{
		id: "L1-14",
		lecture: "L1",
		tag: "L1 14 A",
		type: "mc",
		prompt: "Levels of organization from smallest to largest:",
		choices: [
			"Organ → tissue → cell → molecule",
			"Atom/molecule → cell → tissue → organ → organ system → organism",
			"Tissue → cell → organ → organism",
			"Organ system → organ → tissue → cell"
		],
		answer: 1,
		accept: ["chemical cell tissue organ organ system organism"],
		explain: "Chemical (atom/molecule) → cellular → tissue → organ → organ system → organism."
	},
	{
		id: "L1-15",
		lecture: "L1",
		tag: "L1 15 A",
		type: "mc",
		prompt: "The axial body includes the:",
		choices: [
			"Arms and legs",
			"Trunk (head, neck, thorax, abdomen, pelvis)",
			"Hands only",
			"Appendages only"
		],
		answer: 1,
		accept: ["trunk", "head neck trunk"],
		explain: "Axial = trunk. Appendicular = arms and legs."
	},
	{
		id: "L1-16",
		lecture: "L1",
		tag: "L1 16 A",
		type: "tf",
		prompt: "The appendicular body involves the arms and legs.",
		choices: ["True", "False"],
		answer: 0,
		accept: ["true"],
		explain: "Appendicular body = arms and legs. Axial = trunk."
	},
	{
		id: "L1-17",
		lecture: "L1",
		tag: "L1 17 A",
		type: "mc",
		prompt: "The somatic body involves:",
		choices: [
			"Internal organs in cavities",
			"Superficial structures such as skin and skeletal muscle",
			"Only the brain",
			"Only blood"
		],
		answer: 1,
		accept: ["skin and skeletal muscle", "superficial structures"],
		explain: "Somatic = superficial structures (skin, skeletal muscle). Visceral = internal organs."
	},
	{
		id: "L1-18",
		lecture: "L1",
		tag: "L1 18 A",
		type: "mc",
		prompt: "Which abdominal quadrant contains the appendix?",
		choices: [
			"RUQ",
			"LUQ",
			"RLQ",
			"LLQ"
		],
		answer: 2,
		accept: ["rlq", "right lower quadrant"],
		explain: "Lecture 1 quadrants: RUQ gallbladder, LUQ stomach, LLQ colon, RLQ appendix."
	},
	{
		id: "L1-19",
		lecture: "L1",
		tag: "L1 19 A",
		type: "mc",
		prompt: "Which organ is listed in the left upper quadrant (LUQ) on the lecture slide?",
		choices: [
			"Appendix",
			"Gallbladder",
			"Stomach",
			"Urinary bladder"
		],
		answer: 2,
		accept: ["stomach"],
		explain: "LUQ = stomach. RUQ = gallbladder."
	},
	{
		id: "L1-20",
		lecture: "L1",
		tag: "L1 20 A",
		type: "mc",
		prompt: "The fast-acting control system of the body is the:",
		choices: [
			"Endocrine system",
			"Nervous system",
			"Urinary system",
			"Integumentary system"
		],
		answer: 1,
		accept: ["nervous"],
		explain: "Nervous = fast-acting control. Endocrine = slow-acting control via hormones."
	},
	{
		id: "L1-21",
		lecture: "L1",
		tag: "L1 21 A",
		type: "mc",
		prompt: "Which system supplies O2 and removes CO2?",
		choices: [
			"Digestive",
			"Urinary",
			"Respiratory",
			"Lymphatic"
		],
		answer: 2,
		accept: ["respiratory"],
		explain: "Respiratory supplies oxygen and removes carbon dioxide."
	},
	{
		id: "L1-22",
		lecture: "L1",
		tag: "L1 22 A",
		type: "mc",
		prompt: "Antecubital refers to the:",
		choices: [
			"Wrist",
			"Front of the elbow",
			"Armpit",
			"Chin"
		],
		answer: 1,
		accept: ["front of elbow", "front of the elbow"],
		explain: "Antecubital = front of elbow. Axillary = armpit. Mental = chin. Carpal = wrist."
	},
	{
		id: "L1-23",
		lecture: "L1",
		tag: "L1 23 A",
		type: "mc",
		prompt: "Buccal refers to the:",
		choices: [
			"Cheek",
			"Nose",
			"Forehead",
			"Navel"
		],
		answer: 0,
		accept: ["cheek"],
		explain: "Buccal = cheek. Frontal = forehead. Nasal = nose. Umbilical = navel."
	},
	{
		id: "L2-01",
		lecture: "L2",
		tag: "L2 1 A",
		type: "mc",
		prompt: "A hydrophilic substance:",
		choices: [
			"Repels water",
			"Has an affinity for water",
			"Is always a lipid",
			"Cannot dissolve ions"
		],
		answer: 1,
		accept: [
			"affinity for water",
			"loves water",
			"water loving"
		],
		explain: "Hydrophilic = affinity for water. Hydrophobic = does not mix with water."
	},
	{
		id: "L2-02",
		lecture: "L2",
		tag: "L2 2 A",
		type: "mc",
		prompt: "Oil molecules are hydrophobic because they:",
		choices: [
			"Have charged bonds",
			"Have uncharged bonds",
			"Are ions",
			"Are sugars"
		],
		answer: 1,
		accept: ["uncharged bonds"],
		explain: "Hydrophobic substances lack charge and do not attract water."
	},
	{
		id: "L2-03",
		lecture: "L2",
		tag: "L2 3 A",
		type: "short",
		prompt: "Why is water so good at dissolving things?",
		accept: [
			"it is polar",
			"charge",
			"its charge",
			"versatile solvent due to its charge",
			"polar solvent"
		],
		explain: "Water is a versatile solvent because of its charge; it attracts other charged molecules."
	},
	{
		id: "L2-04",
		lecture: "L2",
		tag: "L2 4 A",
		type: "mc",
		prompt: "The dissolving agent of a solution is the:",
		choices: [
			"Solute",
			"Solvent",
			"Enzyme",
			"Buffer"
		],
		answer: 1,
		accept: ["solvent"],
		explain: "Solvent dissolves; solute is what is dissolved. In the body the main solvent is water."
	},
	{
		id: "L2-05",
		lecture: "L2",
		tag: "L2 5 A",
		type: "mc",
		prompt: "Which organic group is involved with energy, metabolism, and structural support?",
		choices: [
			"Lipids",
			"Carbohydrates",
			"Nucleic acids",
			"Steroids only"
		],
		answer: 1,
		accept: ["carbohydrates"],
		explain: "Carbohydrates: energy, metabolism, and structural support."
	},
	{
		id: "L2-06",
		lecture: "L2",
		tag: "L2 6 A",
		type: "mc",
		prompt: "Which group is united by hydrophobia?",
		choices: [
			"Carbohydrates",
			"Proteins",
			"Lipids",
			"Nucleic acids"
		],
		answer: 2,
		accept: ["lipids", "fats"],
		explain: "Lipids are hydrophobic (or amphipathic for phospholipids)."
	},
	{
		id: "L2-07",
		lecture: "L2",
		tag: "L2 7 A",
		type: "mc",
		prompt: "Which group is responsible for almost all cellular function (a cell’s “job”)?",
		choices: [
			"Lipids",
			"Carbohydrates",
			"Proteins",
			"Steroids"
		],
		answer: 2,
		accept: ["proteins"],
		explain: "Proteins are responsible for almost everything about a life form; a cell’s job is to make proteins."
	},
	{
		id: "L2-08",
		lecture: "L2",
		tag: "L2 8 A",
		type: "mc",
		prompt: "Which group provides instructions on how to make proteins?",
		choices: [
			"Lipids",
			"Carbohydrates",
			"Nucleic acids",
			"Triglycerides"
		],
		answer: 2,
		accept: ["nucleic acids", "dna"],
		explain: "Nucleic acids (DNA/RNA) store and transmit instructions for proteins."
	},
	{
		id: "L2-09",
		lecture: "L2",
		tag: "L2 9 A",
		type: "mc",
		prompt: "Which carbohydrate is associated with ATP production (immediate fuel)?",
		choices: [
			"Cellulose",
			"Glycogen",
			"Glucose",
			"Starch"
		],
		answer: 2,
		accept: ["glucose"],
		explain: "Glucose units fuel ATP production. Glycogen stores energy in animals; starch in plants; cellulose is plant cell walls."
	},
	{
		id: "L2-10",
		lecture: "L2",
		tag: "L2 10 A",
		type: "mc",
		prompt: "Glycogen is:",
		choices: [
			"Plant cell wall structure",
			"Energy storage in animals (liver and skeletal muscle)",
			"Dietary fiber only",
			"A steroid hormone"
		],
		answer: 1,
		accept: ["energy storage in animals", "storage in liver and skeletal muscle"],
		explain: "Glycogen = animal energy storage in liver and skeletal muscle. Limited stores in newborns → hypoglycemia risk."
	},
	{
		id: "L2-11",
		lecture: "L2",
		tag: "L2 11 A",
		type: "mc",
		prompt: "Plant energy storage carbohydrate is:",
		choices: [
			"Glycogen",
			"Starch",
			"Cellulose",
			"Glucose only"
		],
		answer: 1,
		accept: ["starch"],
		explain: "Starch stores energy in plants. Cellulose is structural in plant cell walls."
	},
	{
		id: "L2-12",
		lecture: "L2",
		tag: "L2 12 A",
		type: "mc",
		prompt: "Which lipid type is found in the diet and used for energy?",
		choices: [
			"Phospholipids",
			"Triglycerides",
			"Steroids",
			"Cellulose"
		],
		answer: 1,
		accept: ["triglycerides", "fats"],
		explain: "3 lipid types: triglycerides (diet/energy), phospholipids (membranes), steroids (membranes + hormones)."
	},
	{
		id: "L2-13",
		lecture: "L2",
		tag: "L2 13 A",
		type: "mc",
		prompt: "Which lipid has a hydrophilic portion and a hydrophobic portion?",
		choices: [
			"Triglyceride",
			"Phospholipid",
			"Cellulose",
			"Glycogen"
		],
		answer: 1,
		accept: ["phospholipid"],
		explain: "Phospholipids: hydrophilic head + hydrophobic tails → bilayer of the plasma membrane."
	},
	{
		id: "L2-14",
		lecture: "L2",
		tag: "L2 14 A",
		type: "mc",
		prompt: "Which lipid has a 4-ring structure?",
		choices: [
			"Triglyceride",
			"Phospholipid",
			"Steroid",
			"Starch"
		],
		answer: 2,
		accept: ["steroid", "steroids"],
		explain: "Steroids are unified by four fused rings (cholesterol, estrogen, testosterone, cortisol)."
	},
	{
		id: "L2-15",
		lecture: "L2",
		tag: "L2 15 A",
		type: "mc",
		prompt: "Osmosis is the diffusion of _____ across a membrane.",
		choices: [
			"Glucose",
			"Sodium",
			"Water",
			"Protein"
		],
		answer: 2,
		accept: ["water"],
		explain: "Osmosis = diffusion of water across a membrane."
	},
	{
		id: "L2-16",
		lecture: "L2",
		tag: "L2 16 A",
		type: "mc",
		prompt: "Solutes (and water by osmosis) move from:",
		choices: [
			"Low to high concentration without energy always",
			"High to low concentration (down the gradient)",
			"Only into the nucleus",
			"Randomly with no pattern"
		],
		answer: 1,
		accept: ["high to low"],
		explain: "Molecules diffuse from high to low concentration. Water follows solute: toward higher solute."
	},
	{
		id: "L2-17",
		lecture: "L2",
		tag: "L2 17 A",
		type: "mc",
		prompt: "A cell placed in a hypertonic (very concentrated) environment will:",
		choices: [
			"Swell and possibly lyse",
			"Lose water and shrink",
			"Stay exactly the same forever",
			"Make more glycogen"
		],
		answer: 1,
		accept: [
			"shrink",
			"crenate",
			"lose water"
		],
		explain: "Hypertonic = higher solute outside → water leaves the cell. Hypotonic = water enters → swell."
	},
	{
		id: "L2-18",
		lecture: "L2",
		tag: "L2 18 A",
		type: "application",
		prompt: "Why can’t humans drink salt water?",
		choices: [
			"It is hypotonic and explodes cells",
			"It is hypertonic, pulling water out of cells and dehydrating the body",
			"Salt cannot dissolve in water",
			"It blocks transcription"
		],
		answer: 1,
		accept: [
			"hypertonic",
			"dehydrates",
			"pulls water out"
		],
		explain: "Seawater is hypertonic to body fluids; water leaves cells and you become more dehydrated."
	},
	{
		id: "L2-19",
		lecture: "L2",
		tag: "L2 19 A",
		type: "application",
		prompt: "Water intoxication puts cells in a _____ environment so they swell.",
		choices: [
			"Hypertonic",
			"Isotonic",
			"Hypotonic",
			"Hydrophobic"
		],
		answer: 2,
		accept: ["hypotonic"],
		explain: "Too much free water lowers extracellular solute → hypotonic → water rushes into cells."
	},
	{
		id: "L2-20",
		lecture: "L2",
		tag: "L2 20 A",
		type: "mc",
		prompt: "The majority of the plasma membrane is made of:",
		choices: [
			"DNA",
			"Phospholipids",
			"Glycogen",
			"Cellulose"
		],
		answer: 1,
		accept: ["phospholipids", "phospholipid bilayer"],
		explain: "Plasma membrane = phospholipid bilayer. Two major jobs: barrier and selective transport."
	},
	{
		id: "L2-21",
		lecture: "L2",
		tag: "L2 21 A",
		type: "mc",
		prompt: "Which molecules cross the plasma membrane easily without help?",
		choices: [
			"Sugars",
			"Ions",
			"Hydrophobic molecules",
			"Proteins"
		],
		answer: 2,
		accept: [
			"hydrophobic",
			"lipids",
			"nonpolar"
		],
		explain: "Hydrophobic molecules dissolve in the lipid bilayer. Hydrophilic molecules and ions need proteins."
	},
	{
		id: "L2-22",
		lecture: "L2",
		tag: "L2 22 A",
		type: "mc",
		prompt: "Active transport moves solutes _____ and requires _____.",
		choices: [
			"Down their gradient; no energy",
			"Against their gradient; energy (ATP)",
			"Only water; osmosis",
			"Randomly; heat only"
		],
		answer: 1,
		accept: ["against gradient atp", "low to high atp"],
		explain: "Active transport = low → high concentration and requires energy."
	},
	{
		id: "L2-23",
		lecture: "L2",
		tag: "L2 23 A",
		type: "mc",
		prompt: "“Cellular eating” of solid particles is:",
		choices: [
			"Pinocytosis",
			"Phagocytosis",
			"Receptor-mediated endocytosis only",
			"Osmosis"
		],
		answer: 1,
		accept: ["phagocytosis"],
		explain: "Phagocytosis = cellular eating. Pinocytosis = cellular drinking. Receptor-mediated = specific cargo."
	},
	{
		id: "L2-24",
		lecture: "L2",
		tag: "L2 24 A",
		type: "mc",
		prompt: "The most specific form of endocytosis is:",
		choices: [
			"Phagocytosis",
			"Pinocytosis",
			"Receptor-mediated endocytosis",
			"Simple diffusion"
		],
		answer: 2,
		accept: ["receptor-mediated endocytosis", "receptor mediated"],
		explain: "Receptor-mediated endocytosis selects molecules that bind membrane receptors (e.g., cholesterol)."
	},
	{
		id: "L2-25",
		lecture: "L2",
		tag: "L2 25 A",
		type: "tf",
		prompt: "Electrolytes help control osmosis.",
		choices: ["True", "False"],
		answer: 0,
		accept: ["true"],
		explain: "Electrolytes are charged atoms inside/outside cells; they create osmotic gradients and electrical signals."
	},
	{
		id: "L3-01",
		lecture: "L3",
		tag: "L3 1 A",
		type: "mc",
		prompt: "Which junction completely fuses cells and prevents substances from passing between them?",
		choices: [
			"Desmosome",
			"Gap junction",
			"Tight junction",
			"Hemidesmosome only"
		],
		answer: 2,
		accept: ["tight junction", "tight junctions"],
		explain: "Tight junctions seal cells (best barrier). Desmosomes = strongest spot welds. Gap junctions = passageways/communication."
	},
	{
		id: "L3-02",
		lecture: "L3",
		tag: "L3 2 A",
		type: "mc",
		prompt: "Which junction provides a passageway so cells can communicate?",
		choices: [
			"Tight junction",
			"Desmosome",
			"Gap junction",
			"Plasmodesmata in humans"
		],
		answer: 2,
		accept: ["gap junction", "gap junctions"],
		explain: "Gap junctions create channels between cells."
	},
	{
		id: "L3-03",
		lecture: "L3",
		tag: "L3 3 A",
		type: "mc",
		prompt: "Which junction creates the strongest connection but does not completely fuse cells?",
		choices: [
			"Tight junction",
			"Desmosome",
			"Gap junction",
			"Nucleus"
		],
		answer: 1,
		accept: ["desmosome", "desmosomes"],
		explain: "Desmosomes are anchoring junctions (strongest mechanical connection)."
	},
	{
		id: "L3-04",
		lecture: "L3",
		tag: "L3 4 A",
		type: "mc",
		prompt: "An increased number of cells in an area is:",
		choices: [
			"Hypertrophy",
			"Hyperplasia",
			"Atrophy",
			"Necrosis"
		],
		answer: 1,
		accept: ["hyperplasia"],
		explain: "Hyperplasia = more cells. Hypertrophy = bigger cells. Atrophy = smaller size or fewer cells."
	},
	{
		id: "L3-05",
		lecture: "L3",
		tag: "L3 5 A",
		type: "mc",
		prompt: "Increased cell size in an area is:",
		choices: [
			"Hyperplasia",
			"Hypertrophy",
			"Apoptosis",
			"Metaphase"
		],
		answer: 1,
		accept: ["hypertrophy"],
		explain: "Hypertrophy = increase in cell size (classic skeletal muscle training)."
	},
	{
		id: "L3-06",
		lecture: "L3",
		tag: "L3 6 A",
		type: "mc",
		prompt: "Programmed cell death that does NOT spill contents is:",
		choices: [
			"Necrosis",
			"Apoptosis",
			"Hyperplasia",
			"Pinocytosis"
		],
		answer: 1,
		accept: ["apoptosis"],
		explain: "Apoptosis = programmed; lysosomes destroy contents inside. Necrosis = after severe damage; contents spill and trigger inflammation."
	},
	{
		id: "L3-07",
		lecture: "L3",
		tag: "L3 7 A",
		type: "mc",
		prompt: "Which death process triggers the immune/inflammatory response?",
		choices: [
			"Apoptosis",
			"Necrosis",
			"Mitosis",
			"Transcription"
		],
		answer: 1,
		accept: ["necrosis"],
		explain: "Spilled cellular contents in necrosis alarm the immune system."
	},
	{
		id: "L3-08",
		lecture: "L3",
		tag: "L3 8 A",
		type: "mc",
		prompt: "Intracellular fluid is the:",
		choices: [
			"Plasma",
			"Cytosol / cytoplasm",
			"Interstitial fluid only",
			"Matrix"
		],
		answer: 1,
		accept: [
			"cytosol",
			"cytoplasm",
			"intracellular fluid"
		],
		explain: "Three basic cell parts: plasma membrane, cytoplasm/cytosol (ICF), nucleus."
	},
	{
		id: "L3-09",
		lecture: "L3",
		tag: "L3 9 A",
		type: "mc",
		prompt: "Folded mitochondrial membranes are advantageous because they:",
		choices: [
			"Store DNA only",
			"Increase surface area and make ATP production more efficient",
			"Make glycogen",
			"Form cilia"
		],
		answer: 1,
		accept: ["increase surface area", "more efficient"],
		explain: "Folding membranes make mitochondria more efficient at ATP production."
	},
	{
		id: "L3-10",
		lecture: "L3",
		tag: "L3 10 A",
		type: "mc",
		prompt: "Cytoplasmic ribosomes make proteins for _____; RER ribosomes make proteins for _____.",
		choices: [
			"Export; the cell itself",
			"The cell itself; outside the cell / membranes / lysosomes",
			"Nucleus; mitochondria",
			"ATP; DNA"
		],
		answer: 1,
		accept: ["cell vs outside", "inside vs export"],
		explain: "Free ribosomes = proteins for the cell. RER ribosomes = proteins leaving the cell or going to membranes/lysosomes."
	},
	{
		id: "L3-11",
		lecture: "L3",
		tag: "L3 11 A",
		type: "mc",
		prompt: "The nucleolus:",
		choices: [
			"Makes ATP",
			"Makes ribosomes",
			"Stores glycogen",
			"Performs phagocytosis"
		],
		answer: 1,
		accept: ["makes ribosomes"],
		explain: "Nucleolus makes ribosomes. Nucleus stores DNA."
	},
	{
		id: "L3-12",
		lecture: "L3",
		tag: "L3 12 A",
		type: "mc",
		prompt: "Lysosomes are most like the cell’s:",
		choices: [
			"Digestive system",
			"Skeleton",
			"Control center",
			"Power plant"
		],
		answer: 0,
		accept: ["digestive system"],
		explain: "Lysosomes digest. Mitochondria = power plant. Nucleus = control. Peroxisomes ~ immune/detox."
	},
	{
		id: "L3-13",
		lecture: "L3",
		tag: "L3 13 A",
		type: "mc",
		prompt: "Smallest cytoskeletal fiber:",
		choices: [
			"Microtubules",
			"Intermediate filaments",
			"Microfilaments",
			"Flagella"
		],
		answer: 2,
		accept: ["microfilaments"],
		explain: "Small = microfilaments; medium = intermediate fibers; large = microtubules."
	},
	{
		id: "L3-14",
		lecture: "L3",
		tag: "L3 14 A",
		type: "mc",
		prompt: "Mitotic spindle, flagella, and cilia are built from:",
		choices: [
			"Microfilaments",
			"Intermediate filaments",
			"Microtubules",
			"Keratin only"
		],
		answer: 2,
		accept: ["microtubules"],
		explain: "Microtubules + centrosomes form the mitotic spindle; microtubules also build cilia and flagella. Microvilli use microfilaments."
	},
	{
		id: "L3-15",
		lecture: "L3",
		tag: "L3 15 A",
		type: "mc",
		prompt: "Which cytoskeleton variation increases surface area?",
		choices: [
			"Cilia",
			"Flagella",
			"Microvilli",
			"Mitotic spindle"
		],
		answer: 2,
		accept: ["microvilli"],
		explain: "Microvilli ↑ SA. Cilia = beating movement. Flagella = directional movement. Spindle = cell division."
	},
	{
		id: "L3-16",
		lecture: "L3",
		tag: "L3 16 A",
		type: "short",
		prompt: "DNA is organized into units called _____.",
		accept: [
			"chromosomes",
			"genes",
			"chromatin"
		],
		explain: "Chromosomes = linear sequences of genes made of DNA + histones. Histones package DNA (chromatin)."
	},
	{
		id: "L3-17",
		lecture: "L3",
		tag: "L3 17 A",
		type: "mc",
		prompt: "Transcription produces _____; translation produces _____.",
		choices: [
			"Protein; mRNA",
			"mRNA; protein",
			"DNA; lipid",
			"ATP; glucose"
		],
		answer: 1,
		accept: ["mrna protein", "rna protein"],
		explain: "Central dogma: DNA → (transcription) mRNA → (translation) protein."
	},
	{
		id: "L3-18",
		lecture: "L3",
		tag: "L3 18 A",
		type: "short",
		prompt: "Fill the flow: _______ → _______ → Protein",
		accept: [
			"dna mrna protein",
			"dna rna protein",
			"dna mrna",
			"dna to mrna to protein"
		],
		explain: "DNA → mRNA → protein. Faulty DNA is the source of genetic disease (e.g., sickle cell)."
	},
	{
		id: "L3-19",
		lecture: "L3",
		tag: "L3 19 A",
		type: "mc",
		prompt: "The cell spends most of its time in:",
		choices: [
			"Mitosis",
			"Interphase",
			"Cytokinesis only",
			"Anaphase"
		],
		answer: 1,
		accept: ["interphase"],
		explain: "Two phases of the cell cycle: interphase (most of life) and mitotic phase (division)."
	},
	{
		id: "L3-20",
		lecture: "L3",
		tag: "L3 20 A",
		type: "mc",
		prompt: "Sister chromatids are:",
		choices: [
			"Non-identical homologs from each parent",
			"Identical copies made when DNA is replicated",
			"Only in G1",
			"Never pulled apart"
		],
		answer: 1,
		accept: ["identical", "identical copies"],
		explain: "Homologous chromosomes = non-identical pair inherited from parents, always present. Sister chromatids = identical copies that exist after S phase and are pulled apart in anaphase."
	},
	{
		id: "L3-21",
		lecture: "L3",
		tag: "L3 21 A",
		type: "mc",
		prompt: "DNA is copied and sister chromatids form during:",
		choices: [
			"G1",
			"S phase",
			"G2",
			"Anaphase"
		],
		answer: 1,
		accept: ["s phase", "s"],
		explain: "Interphase: G1 (grow), S (synthesize DNA), G2 (prepare to divide)."
	},
	{
		id: "L3-22",
		lecture: "L3",
		tag: "L3 22 A",
		type: "mc",
		prompt: "Chromosomes line up at the equator during:",
		choices: [
			"Prophase",
			"Metaphase",
			"Anaphase",
			"Telophase"
		],
		answer: 1,
		accept: ["metaphase"],
		explain: "Prophase: spindle forms, nuclear membrane breaks down. Metaphase: line up. Anaphase: sisters pulled apart. Telophase: two nuclei form."
	},
	{
		id: "L3-23",
		lecture: "L3",
		tag: "L3 23 A",
		type: "mc",
		prompt: "Sister chromatids are pulled apart during:",
		choices: [
			"Prophase",
			"Metaphase",
			"Anaphase",
			"G1"
		],
		answer: 2,
		accept: ["anaphase"],
		explain: "Anaphase separates sister chromatids."
	},
	{
		id: "L4-01",
		lecture: "L4",
		tag: "L4 1 A",
		type: "short",
		prompt: "A fertilized egg is called a _____.",
		accept: ["zygote"],
		explain: "Zygote = fertilized egg. It is totipotent."
	},
	{
		id: "L4-02",
		lecture: "L4",
		tag: "L4 2 A",
		type: "mc",
		prompt: "A stem cell that can give rise to ANY cell type is:",
		choices: [
			"Pluripotent",
			"Totipotent",
			"Unipotent",
			"Dead"
		],
		answer: 1,
		accept: ["totipotent"],
		explain: "Totipotent = any cell type (zygote). Pluripotent = several cell types (inner cell mass / iPSC)."
	},
	{
		id: "L4-03",
		lecture: "L4",
		tag: "L4 3 A",
		type: "mc",
		prompt: "iPSC means:",
		choices: [
			"Immature protein stem cell",
			"Induced pluripotent stem cell",
			"Internal peritoneal serous cavity",
			"Inhibited proto-oncogene stem cycle"
		],
		answer: 1,
		accept: ["induced pluripotent stem cell", "induced pluripotent stem cells"],
		explain: "iPSC = adult cells reprogrammed back to an embryonic-like pluripotent state."
	},
	{
		id: "L4-04",
		lecture: "L4",
		tag: "L4 4 A",
		type: "short",
		prompt: "Define differentiation.",
		accept: [
			"unspecialized cells become specialized",
			"immature cells take on specific characteristics",
			"cells become specialized"
		],
		explain: "Differentiation = immature, unspecialized cells take on specific form and function."
	},
	{
		id: "L4-05",
		lecture: "L4",
		tag: "L4 5 A",
		type: "mc",
		prompt: "Gastrulation is:",
		choices: [
			"Formation of the neural tube",
			"Reorganization of the embryo into multilayered germ layers",
			"Birth itself",
			"DNA replication"
		],
		answer: 1,
		accept: ["formation of germ layers", "multilayered embryo"],
		explain: "Gastrulation reorganizes the embryo into ectoderm, mesoderm, and endoderm. Neurulation forms the neural tube."
	},
	{
		id: "L4-06",
		lecture: "L4",
		tag: "L4 6 A",
		type: "mc",
		prompt: "An agent that causes congenital birth defects is a:",
		choices: [
			"Hormone",
			"Teratogen",
			"Cadherin",
			"Cyclin"
		],
		answer: 1,
		accept: ["teratogen"],
		explain: "Teratogens cause congenital defects and are most harmful in the embryonic stage (organogenesis)."
	},
	{
		id: "L4-07",
		lecture: "L4",
		tag: "L4 7 A",
		type: "mc",
		prompt: "The three stages of the prenatal period are pre-embryonic, embryonic, and fetal. Organogenesis occurs in the:",
		choices: [
			"Pre-embryonic",
			"Embryonic",
			"Fetal",
			"Postnatal"
		],
		answer: 1,
		accept: ["embryonic"],
		explain: "Embryonic stage = organogenesis (shortest of the major organ-building windows). Fetal stage is the longest."
	},
	{
		id: "L4-08",
		lecture: "L4",
		tag: "L4 8 A",
		type: "mc",
		prompt: "Which prenatal stage is the longest?",
		choices: [
			"Pre-embryonic",
			"Embryonic",
			"Fetal",
			"Gastrulation only"
		],
		answer: 2,
		accept: ["fetal"],
		explain: "Fetal period is the longest. Pre-embryonic is shortest."
	},
	{
		id: "L4-09",
		lecture: "L4",
		tag: "L4 9 A",
		type: "mc",
		prompt: "The outer embryonic germ layer is:",
		choices: [
			"Endoderm",
			"Mesoderm",
			"Ectoderm",
			"Stroma"
		],
		answer: 2,
		accept: ["ectoderm"],
		explain: "Ecto = outer (nervous system + epidermis). Meso = middle (somatic body, CV). Endo = inner (gut, respiratory lining)."
	},
	{
		id: "L4-10",
		lecture: "L4",
		tag: "L4 10 A",
		type: "mc",
		prompt: "Which germ layer forms the nervous system and skin epidermis?",
		choices: [
			"Endoderm",
			"Mesoderm",
			"Ectoderm",
			"All equally"
		],
		answer: 2,
		accept: ["ectoderm"],
		explain: "Ectoderm → nervous system and epidermis of skin."
	},
	{
		id: "L4-11",
		lecture: "L4",
		tag: "L4 11 A",
		type: "mc",
		prompt: "Which germ layer forms the digestive and respiratory linings?",
		choices: [
			"Ectoderm",
			"Mesoderm",
			"Endoderm",
			"Neural crest only"
		],
		answer: 2,
		accept: ["endoderm"],
		explain: "Endoderm = innermost layer of digestive, respiratory, and reproductive tubes; also accessory digestive organs."
	},
	{
		id: "L4-12",
		lecture: "L4",
		tag: "L4 12 A",
		type: "mc",
		prompt: "The cardiovascular system and much of the somatic body arise from:",
		choices: [
			"Ectoderm",
			"Mesoderm",
			"Endoderm",
			"Yolk sac only"
		],
		answer: 1,
		accept: ["mesoderm"],
		explain: "Mesoderm = middle layer; CV system, muscle, bone, connective tissues (somatic body)."
	},
	{
		id: "L4-13",
		lecture: "L4",
		tag: "L4 13 A",
		type: "mc",
		prompt: "Genes that stimulate the cell cycle in a healthy way are:",
		choices: [
			"Tumor-suppressor genes",
			"Proto-oncogenes",
			"Teratogens",
			"Lysosomes"
		],
		answer: 1,
		accept: ["proto-oncogenes", "proto oncogenes"],
		explain: "Proto-oncogenes stimulate division (make growth-promoting proteins). Mutated versions = oncogenes → cancer."
	},
	{
		id: "L4-14",
		lecture: "L4",
		tag: "L4 14 A",
		type: "mc",
		prompt: "Mutated proto-oncogenes that over-stimulate division are called:",
		choices: [
			"Tumor-suppressor genes",
			"Oncogenes",
			"Cadherins",
			"iPSCs"
		],
		answer: 1,
		accept: ["oncogenes"],
		explain: "Oncogenes = mutated proto-oncogenes. Mutated tumor-suppressor genes fail to brake the cycle."
	},
	{
		id: "L4-15",
		lecture: "L4",
		tag: "L4 15 A",
		type: "mc",
		prompt: "The two functions of epithelial tissue are to:",
		choices: [
			"Contract and conduct",
			"Create a barrier and participate in organ activity",
			"Store fat and make blood",
			"Form spindle fibers"
		],
		answer: 1,
		accept: ["barrier and organ activity", "barrier and function"],
		explain: "Epithelium = barrier + does the organ’s job (secrete, absorb, filter)."
	},
	{
		id: "L4-16",
		lecture: "L4",
		tag: "L4 16 A",
		type: "mc",
		prompt: "Simple epithelium has _____ layer(s), is a _____ barrier, and is _____ at organ activity.",
		choices: [
			"Many; excellent; poor",
			"One; poor; good",
			"One; excellent; poor",
			"Zero; good; good"
		],
		answer: 1,
		accept: ["one poor barrier good activity"],
		explain: "Simple = 1 layer → weak barrier, good for absorption/secretion/filtration (lungs, gut, kidney)."
	},
	{
		id: "L4-17",
		lecture: "L4",
		tag: "L4 17 A",
		type: "mc",
		prompt: "Stratified epithelium is a _____ barrier and is _____ at participating in organ activity.",
		choices: [
			"Poor; excellent",
			"Good; less specialized for organ activity",
			"Good; the best secretory surface",
			"Absent; muscular"
		],
		answer: 1,
		accept: ["good barrier"],
		explain: "Many layers = good barrier (skin, mouth) but not ideal for rapid exchange."
	},
	{
		id: "L4-18",
		lecture: "L4",
		tag: "L4 18 A",
		type: "mc",
		prompt: "Squamous cells are:",
		choices: [
			"Flat",
			"Cube-shaped",
			"Tall columns",
			"Always ciliated"
		],
		answer: 0,
		accept: ["flat"],
		explain: "Squamous = flat. Cuboidal = cube. Columnar = tall. Pseudostratified looks layered but is simple. Transitional stretches (bladder)."
	},
	{
		id: "L4-19",
		lecture: "L4",
		tag: "L4 19 A",
		type: "mc",
		prompt: "Cilia are found on _____ epithelium; microvilli on _____ epithelium.",
		choices: [
			"Stratified squamous; transitional",
			"Pseudostratified columnar; simple columnar",
			"Simple squamous; bone",
			"Cuboidal; adipose"
		],
		answer: 1,
		accept: ["pseudostratified and simple columnar"],
		explain: "Lecture: cilia on pseudostratified columnar only; microvilli on simple columnar only. Keratin on stratified squamous."
	},
	{
		id: "L4-20",
		lecture: "L4",
		tag: "L4 20 A",
		type: "mc",
		prompt: "Keratin is associated with which layering and shape?",
		choices: [
			"Simple cuboidal",
			"Stratified squamous",
			"Simple squamous",
			"Transitional only"
		],
		answer: 1,
		accept: ["stratified squamous"],
		explain: "Keratinized stratified squamous epithelium = epidermis."
	},
	{
		id: "L4-21",
		lecture: "L4",
		tag: "L4 21 A",
		type: "tf",
		prompt: "Epithelium heals well because it is highly mitotic / regenerative.",
		choices: ["True", "False"],
		answer: 0,
		accept: ["true"],
		explain: "High cell turnover is why epithelium is so effective at healing."
	},
	{
		id: "L5-01",
		lecture: "L5",
		tag: "L5 1 A",
		type: "mc",
		prompt: "Which tissue type supports the body?",
		choices: [
			"Epithelial",
			"Connective",
			"Muscle",
			"Nervous"
		],
		answer: 1,
		accept: ["connective"],
		explain: "Connective = support. Epithelial = barrier + organ activity. Muscle = movement. Nervous = electrical signals."
	},
	{
		id: "L5-02",
		lecture: "L5",
		tag: "L5 2 A",
		type: "mc",
		prompt: "Which tissue participates in an organ’s function (secretion, absorption, filtration)?",
		choices: [
			"Connective",
			"Epithelial",
			"Bone",
			"Blood"
		],
		answer: 1,
		accept: ["epithelial", "epithelium"],
		explain: "Epithelium does the organ’s job."
	},
	{
		id: "L5-03",
		lecture: "L5",
		tag: "L5 3 A",
		type: "mc",
		prompt: "Which tissue conducts electrical signals?",
		choices: [
			"Muscle",
			"Nervous",
			"Areolar CT",
			"Transitional epithelium"
		],
		answer: 1,
		accept: ["nervous"],
		explain: "Nervous tissue conducts electrical signals."
	},
	{
		id: "L5-04",
		lecture: "L5",
		tag: "L5 4 A",
		type: "mc",
		prompt: "Which tissue produces movement?",
		choices: [
			"Epithelial",
			"Connective",
			"Muscle",
			"Adipose"
		],
		answer: 2,
		accept: ["muscle"],
		explain: "Muscle tissue produces movement."
	},
	{
		id: "L5-05",
		lecture: "L5",
		tag: "L5 5 A",
		type: "mc",
		prompt: "Membranes that line cavities OPEN to the exterior are:",
		choices: [
			"Serous",
			"Mucous",
			"Cutaneous only",
			"Synovial only"
		],
		answer: 1,
		accept: ["mucous", "mucosa"],
		explain: "Mucous = open to exterior (respiratory, digestive). Serous = closed cavities. Cutaneous = skin."
	},
	{
		id: "L5-06",
		lecture: "L5",
		tag: "L5 6 A",
		type: "mc",
		prompt: "Serous membranes line cavities that are:",
		choices: [
			"Open to the exterior",
			"Closed to the exterior",
			"Only in the skin",
			"Only in joints"
		],
		answer: 1,
		accept: ["closed to the exterior", "closed"],
		explain: "Serous membranes line closed cavities (heart, lungs, abdomen). Mesothelioma is cancer of serous membranes."
	},
	{
		id: "L5-07",
		lecture: "L5",
		tag: "L5 7 A",
		type: "mc",
		prompt: "The 3 components of all connective tissues are:",
		choices: [
			"Actin, myosin, tropomyosin",
			"Cells, protein fibers, and ground substance",
			"Neurons, dendrites, axons",
			"Cilia, microvilli, keratin"
		],
		answer: 1,
		accept: ["cells fibers ground substance"],
		explain: "Cells + fibers + ground substance. Fibers + ground substance = matrix. CT is the least cellular tissue."
	},
	{
		id: "L5-08",
		lecture: "L5",
		tag: "L5 8 A",
		type: "mc",
		prompt: "The two connective-tissue cell populations are:",
		choices: [
			"Resident (physical support) and wandering (immune, from blood)",
			"Only neurons and glia",
			"Only squamous and cuboidal",
			"Proto-oncogenes and suppressors"
		],
		answer: 0,
		accept: ["resident and wandering"],
		explain: "Resident cells stay and physically support CT. Wandering immune cells come from blood and move in/out."
	},
	{
		id: "L5-09",
		lecture: "L5",
		tag: "L5 9 A",
		type: "mc",
		prompt: "Protein fibers of connective tissue include collagen, elastic, and reticular. Collagen is:",
		choices: [
			"The most flexible and weakest",
			"Strong and found in almost every CT",
			"Found only in blood",
			"A steroid"
		],
		answer: 1,
		accept: ["strong", "strength"],
		explain: "Collagen = strength (almost every CT). Elastic = stretch. Reticular = delicate mesh (stroma)."
	},
	{
		id: "L5-10",
		lecture: "L5",
		tag: "L5 10 A",
		type: "mc",
		prompt: "Which muscle type is under conscious control and attached to the skeleton?",
		choices: [
			"Smooth",
			"Cardiac",
			"Skeletal",
			"All of them"
		],
		answer: 2,
		accept: ["skeletal"],
		explain: "Skeletal = voluntary, striated, on bones. Cardiac = involuntary, striated, heart. Smooth = involuntary, no striations, vessels and gut."
	},
	{
		id: "L5-11",
		lecture: "L5",
		tag: "L5 11 A",
		type: "mc",
		prompt: "Muscle of the heart is _____ ; muscle in blood vessels and the digestive tract is _____.",
		choices: [
			"Skeletal; cardiac",
			"Cardiac; smooth",
			"Smooth; skeletal",
			"Cardiac; skeletal"
		],
		answer: 1,
		accept: ["cardiac smooth"],
		explain: "Heart = cardiac. Vessels and GI tract = smooth."
	},
	{
		id: "L5-12",
		lecture: "L5",
		tag: "L5 12 A",
		type: "mc",
		prompt: "Which muscle types have striations?",
		choices: [
			"Smooth only",
			"Skeletal and cardiac",
			"Cardiac and smooth",
			"None"
		],
		answer: 1,
		accept: ["skeletal and cardiac"],
		explain: "Striations in skeletal and cardiac cytoplasm. Smooth has none."
	},
	{
		id: "L5-13",
		lecture: "L5",
		tag: "L5 13 A",
		type: "mc",
		prompt: "The two cell types in nervous tissue are:",
		choices: [
			"Fibroblasts and adipocytes",
			"Neurons and glial cells",
			"Myocytes and osteocytes",
			"Goblet cells and cilia"
		],
		answer: 1,
		accept: ["neurons and glia", "neurons and glial cells"],
		explain: "Neurons conduct; glia support."
	},
	{
		id: "L5-14",
		lecture: "L5",
		tag: "L5 14 A",
		type: "mc",
		prompt: "Which tissue is the least cellular and includes tendons, ligaments, and blood?",
		choices: [
			"Epithelial",
			"Connective",
			"Nervous",
			"Muscle"
		],
		answer: 1,
		accept: ["connective"],
		explain: "Connective tissue is least cellular. Tendons/ligaments = dense CT. Blood is a fluid connective tissue."
	},
	{
		id: "L5-15",
		lecture: "L5",
		tag: "L5 15 A",
		type: "tf",
		prompt: "Blood is classified as a connective tissue.",
		choices: ["True", "False"],
		answer: 0,
		accept: ["true"],
		explain: "Blood is fluid connective tissue (cells + protein + fluid ground substance)."
	},
	{
		id: "L5-16",
		lecture: "L5",
		tag: "L5 16 A",
		type: "application",
		prompt: "A patient inhales asbestos and later develops cancer of the lining of the lungs. That lining is a _____ membrane, and the cancer is classically called mesothelioma.",
		choices: [
			"Mucous",
			"Cutaneous",
			"Serous",
			"Synovial"
		],
		answer: 2,
		accept: ["serous"],
		explain: "Serous membranes line closed cavities such as the pleural cavity. Mesothelioma = cancer of serous membrane cells."
	}
];
var LECTURES = [
	{
		id: "ALL",
		title: "All lectures",
		subtitle: "Full Unit 1 bank"
	},
	{
		id: "L1",
		title: "L1 Foundations",
		subtitle: "Terms, planes, systems"
	},
	{
		id: "L2",
		title: "L2 Body chemistry",
		subtitle: "Water, macromolecules, membrane"
	},
	{
		id: "L3",
		title: "L3 The cell",
		subtitle: "Junctions, organelles, mitosis"
	},
	{
		id: "L4",
		title: "L4 Tissues part 1",
		subtitle: "Embryo and epithelium"
	},
	{
		id: "L5",
		title: "L5 Tissues part 2",
		subtitle: "Membranes, CT, muscle, nerve"
	}
];
function countByLecture(lecture) {
	if (lecture === "ALL") return QUESTIONS.length;
	return QUESTIONS.filter((q) => q.lecture === lecture).length;
}
var STORAGE_KEY = "ha_unit1_correct_ids_v1";
function loadCorrectIds() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		const parsed = raw ? JSON.parse(raw) : [];
		return Array.isArray(parsed) ? parsed.filter((id) => typeof id === "string") : [];
	} catch {
		return [];
	}
}
function saveCorrectIds(ids) {
	window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...new Set(ids)]));
}
function markCorrect(id) {
	const next = [...loadCorrectIds(), id];
	saveCorrectIds(next);
	return next;
}
function resetProgress() {
	window.localStorage.removeItem(STORAGE_KEY);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function shuffle(items) {
	const next = items.slice();
	for (let i = next.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[next[i], next[j]] = [next[j], next[i]];
	}
	return next;
}
function normalizeAnswer(value) {
	return value.toLowerCase().replace(/[^a-z0-9+\s]/g, " ").replace(/\s+/g, " ").trim();
}
function matchesAccept(user, accept) {
	const normalized = normalizeAnswer(user);
	if (!normalized) return false;
	return accept.some((candidate) => {
		const target = normalizeAnswer(candidate);
		return normalized === target || normalized.includes(target) || target.includes(normalized);
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,border-color] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40 active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "bg-secondary text-secondary-foreground border border-border hover:bg-muted",
			ghost: "text-foreground hover:bg-muted",
			outline: "border border-border bg-card text-card-foreground hover:bg-muted"
		},
		size: {
			default: "h-11 min-h-11 px-4",
			lg: "h-12 min-h-12 px-5 text-base",
			sm: "h-9 px-3"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var TYPE_LABEL = {
	mc: "Multiple choice",
	tf: "True / False",
	short: "Short answer",
	application: "Application"
};
function QuizApp() {
	const [screen, setScreen] = (0, import_react.useState)("start");
	const [lecture, setLecture] = (0, import_react.useState)("ALL");
	const [skipCorrect, setSkipCorrect] = (0, import_react.useState)(true);
	const [correctIds, setCorrectIds] = (0, import_react.useState)(() => loadCorrectIds());
	const [queue, setQueue] = (0, import_react.useState)([]);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [shortValue, setShortValue] = (0, import_react.useState)("");
	const [locked, setLocked] = (0, import_react.useState)(false);
	const [wasCorrect, setWasCorrect] = (0, import_react.useState)(null);
	const [runCorrect, setRunCorrect] = (0, import_react.useState)(0);
	const [runAnswered, setRunAnswered] = (0, import_react.useState)(0);
	const current = queue[index];
	const masteredCounts = (0, import_react.useMemo)(() => {
		const set = new Set(correctIds);
		return Object.fromEntries(LECTURES.map((item) => [item.id, QUESTIONS.filter((q) => (item.id === "ALL" || q.lecture === item.id) && set.has(q.id)).length]));
	}, [correctIds]);
	function startQuiz() {
		const skipSet = new Set(correctIds);
		let pool = QUESTIONS.filter((q) => {
			if (lecture !== "ALL" && q.lecture !== lecture) return false;
			if (skipCorrect && skipSet.has(q.id)) return false;
			return true;
		});
		if (pool.length === 0) pool = QUESTIONS.filter((q) => lecture === "ALL" || q.lecture === lecture);
		setQueue(shuffle(pool));
		setIndex(0);
		setSelected(null);
		setShortValue("");
		setLocked(false);
		setWasCorrect(null);
		setRunCorrect(0);
		setRunAnswered(0);
		setScreen("quiz");
	}
	function checkAnswer() {
		if (!current || locked) return;
		let ok = false;
		if (current.type === "short") ok = matchesAccept(shortValue, current.accept);
		else {
			if (selected === null) return;
			ok = selected === current.answer;
		}
		setLocked(true);
		setWasCorrect(ok);
		setRunAnswered((n) => n + 1);
		if (ok) {
			setRunCorrect((n) => n + 1);
			setCorrectIds(markCorrect(current.id));
		}
	}
	function nextQuestion() {
		if (index + 1 >= queue.length) {
			setScreen("end");
			return;
		}
		setIndex((n) => n + 1);
		setSelected(null);
		setShortValue("");
		setLocked(false);
		setWasCorrect(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs tracking-[0.18em] text-primary uppercase",
							children: "Human Anatomy · Unit 1"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-1 font-display text-3xl leading-tight tracking-tight sm:text-4xl",
							children: "Core Study Quiz"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 max-w-xl text-sm text-muted-foreground",
							children: "One question at a time. Answers stay tagged by lecture, such as L4 1 A."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {
						className: "mt-1 size-7 shrink-0 text-primary",
						"aria-hidden": true
					})]
				}),
				screen === "start" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-medium",
							children: "Lecture picker"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Questions come from the Unit 1 study guide; keys are taken from the lecture decks."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2",
							children: LECTURES.map((item) => {
								const total = countByLecture(item.id);
								const done = masteredCounts[item.id] ?? 0;
								const active = lecture === item.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setLecture(item.id),
									className: `rounded-lg border px-4 py-3 text-left transition-colors ${active ? "border-primary bg-muted" : "border-border bg-bg hover:bg-muted"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-medium",
										children: item.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-1 block font-mono text-xs text-muted-foreground",
										children: [
											item.subtitle,
											" · ",
											done,
											"/",
											total,
											" mastered"
										]
									})]
								}, item.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "mt-5 flex items-start gap-3 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: "mt-1 size-4 accent-primary",
								checked: skipCorrect,
								onChange: (e) => setSkipCorrect(e.target.checked)
							}), "Subsequent quizzes exclude questions you already answered correctly"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 font-mono text-xs text-muted-foreground",
							children: [
								correctIds.length,
								" of ",
								QUESTIONS.length,
								" questions marked correct on this device."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: startQuiz,
								children: "Start quiz"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								onClick: () => {
									resetProgress();
									setCorrectIds([]);
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Reset saved progress"]
							})]
						})
					]
				}),
				screen === "quiz" && current && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-muted px-3 py-1 font-mono text-xs font-medium text-primary",
								children: current.tag
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs text-muted-foreground",
								children: [
									"Question ",
									index + 1,
									" of ",
									queue.length
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-xs font-medium tracking-[0.14em] text-warn uppercase",
							children: TYPE_LABEL[current.type]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-xl leading-snug sm:text-2xl",
							children: current.prompt
						}),
						current.type === "short" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: shortValue,
							onChange: (e) => setShortValue(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "Enter") checkAnswer();
							},
							disabled: locked,
							placeholder: "Type your answer",
							className: "mt-5 h-12 w-full rounded-md border border-border bg-bg px-3 text-base text-fg outline-none ring-ring focus:ring-2"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-col gap-2",
							children: (current.choices ?? []).map((choice, i) => {
								const letter = String.fromCharCode(65 + i);
								let tone = "border-border bg-bg hover:bg-muted";
								if (locked && i === current.answer) tone = "border-ok bg-muted";
								if (locked && selected === i && i !== current.answer) tone = "border-bad bg-muted";
								if (!locked && selected === i) tone = "border-primary bg-muted";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									disabled: locked,
									onClick: () => setSelected(i),
									className: `min-h-12 rounded-lg border px-4 py-3 text-left ${tone}`,
									children: current.type === "tf" ? choice : `${letter}. ${choice}`
								}, choice);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-wrap gap-2",
							children: [
								!locked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: checkAnswer,
									disabled: current.type === "short" ? shortValue.trim().length === 0 : selected === null,
									children: "Check answer"
								}),
								locked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: nextQuestion,
									children: index + 1 >= queue.length ? "Finish" : "Next question"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									onClick: () => setScreen("end"),
									children: "End quiz"
								})
							]
						}),
						locked && wasCorrect !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `mt-5 rounded-lg border p-4 ${wasCorrect ? "border-ok" : "border-bad"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-2 font-medium",
									children: [
										wasCorrect ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-ok" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4 text-bad" }),
										wasCorrect ? "Correct" : "Incorrect",
										" · tagged ",
										current.tag
									]
								}),
								!wasCorrect && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm",
									children: [
										"Expected:",
										" ",
										current.type === "short" ? current.accept[0] : current.choices?.[current.answer ?? 0] ?? ""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: current.explain
								})
							]
						})
					]
				}),
				screen === "end" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl border border-border bg-card p-5 shadow-sm sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-lg font-medium",
							children: "Session complete"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: [
								"You answered ",
								runCorrect,
								" of ",
								runAnswered,
								" correctly this session. Mastered items stay excluded until you reset progress."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => {
									setScreen("start");
									setCorrectIds(loadCorrectIds());
								},
								children: "Back to lecture picker"
							})
						})
					]
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizApp, {});
}
//#endregion
export { Home as component };
