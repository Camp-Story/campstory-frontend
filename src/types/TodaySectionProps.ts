interface TodaySectionProps {
  src: string;
  title: string;
  subTitle: string;
  contentId: string;
  tag: string[];
  path: (id: string) => string;
}

export default TodaySectionProps;
