import type { LectureId } from "./questions";
import { QUESTIONS } from "./questions";

export type LectureFilter = "ALL" | LectureId;

export const LECTURES: { id: LectureFilter; title: string; subtitle: string }[] = [
  { id: "ALL", title: "All lectures", subtitle: "Full Unit 1 bank" },
  { id: "L1", title: "L1 Foundations", subtitle: "Terms, planes, systems" },
  { id: "L2", title: "L2 Body chemistry", subtitle: "Water, macromolecules, membrane" },
  { id: "L3", title: "L3 The cell", subtitle: "Junctions, organelles, mitosis" },
  { id: "L4", title: "L4 Tissues part 1", subtitle: "Embryo and epithelium" },
  { id: "L5", title: "L5 Tissues part 2", subtitle: "Membranes, CT, muscle, nerve" },
];

export function countByLecture(lecture: LectureFilter): number {
  if (lecture === "ALL") return QUESTIONS.length;
  return QUESTIONS.filter((q) => q.lecture === lecture).length;
}
