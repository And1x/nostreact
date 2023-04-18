import listData from "../assets/link_collection/resources.json";

interface LinkLists {
  [key: string]: LinkRecord[];
}

interface LinkRecord {
  title: string;
  url: string;
  category: string[];
}

// the JSX LIST per section
interface LinkListsJSX {
  [key: string]: JSX.Element[];
}

// generate the JSX Elements
export const generateLinkListsJSX = () => {
  const linkLists: LinkLists = listData;
  let linkListsJSX: LinkListsJSX = {};

  for (const section in linkLists) {
    const sectionLinks = linkLists[section].map((item) => {
      return (
        <li className="hover:text-emerald-600">
          <a href={item.url}>{item.title}</a>
        </li>
      );
    });

    linkListsJSX[section] = sectionLinks;
  }

  return linkListsJSX;
};
