import React from "react";

export interface ExperienceInfo {
  src: string;
  provinces: string;
  kind: string;
  title: string;
  text: string;
  date: string;
  location: string;
  people: string;
  provincesState?: string;
  activeState?: string;
}
