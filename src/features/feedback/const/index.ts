const RATINGS: { value: string; title: string }[] = [
  {
    value: '5',
    title: 'perfect'
  },
  {
    value: '4',
    title: 'good'
  },
  {
    value: '3',
    title: 'not bad'
  },
  {
    value: '2',
    title: 'badly'
  },
  {
    value: '1',
    title: 'terribly'
  },
];

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

export { RATINGS, MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH };
