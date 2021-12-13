import tab1 from "./tab1.js";
import tab2 from "./tab2.js";
import tab3 from "./tab3.js";

const page = ({ tabSeq }) => {
  switch (tabSeq) {
    case 0:
      return tab1;
    case 1:
      return tab2;
    case 2:
      return tab3;
  }
};

export default page;
