import { PATH } from "@constants/path";
import QuestionDetail from "@pages/QuestionDetail";
import QuestionCreate from "@pages/QudstionCreate";
import QuestionMain from "@pages/QuestionMain";
import QuestionModify from "@pages/QuestionModify";

const QUESTION_ROUTES = [
  {
    path: PATH.question,
    element: <QuestionMain />,
  },
  {
    path: PATH.questionPostPath,
    element: <QuestionDetail />,
  },
  {
    path: PATH.questionCreate,
    element: <QuestionCreate />,
  },
  {
    path: PATH.questionModifyPath,
    element: <QuestionModify />,
  },
];

export default QUESTION_ROUTES;
