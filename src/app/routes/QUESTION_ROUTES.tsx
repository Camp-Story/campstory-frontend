import { PATH } from "@constants/path";

const QUESTION_ROUTES = [
  {
    path: PATH.question,
    element: <>question</>,
  },
  {
    path: PATH.questionPostPath,
    element: <>question post</>,
  },
  {
    path: PATH.questionCreate,
    element: <>question create</>,
  },
  {
    path: PATH.questionModifyPath,
    element: <>question modify</>,
  },
];

export default QUESTION_ROUTES;
