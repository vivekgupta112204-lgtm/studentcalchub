export enum RoutePath {
  HOME = 'home',
  PERCENTAGE = 'percentage-calculator',
  CGPA_TO_PERCENTAGE = 'cgpa-to-percentage',
  PERCENTAGE_TO_CGPA = 'percentage-to-cgpa',
  PASSING_MARKS = 'passing-marks-calculator',
  GRADE = 'grade-calculator',
  AVERAGE = 'average-marks-calculator',
  ABOUT = 'about-us',
  PRIVACY = 'privacy-policy',
  CONTACT = 'contact-us'
}

export interface CalculatorProps {
  onNavigate: (path: RoutePath) => void;
}

export interface ContentSectionProps {
  title: string;
  children: React.ReactNode;
}