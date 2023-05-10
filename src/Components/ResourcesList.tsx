import allResources from "../assets/link_collection/resources.json";

export type category = keyof typeof allResources;

type Probs = {
  selectedCategory: category;
};

export const allCategories = Object.keys(allResources);

export default function ResourcesList({ selectedCategory }: Probs) {
  return (
    <>
      {allResources[selectedCategory].map((item) => {
        return (
          <li className="hover:text-emerald-600 font-normal mb-1">
            <a href={item.url}>{item.title}</a>
          </li>
        );
      })}
    </>
  );
}
