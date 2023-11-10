import { Category } from '@/interfaces';

interface Props {
  categories: Category[];
  selectedCategory: Category;
  emmitCategory: (category: Category) => void;
}

export default function TabGroup(props: Props) {
  const { categories, selectedCategory, emmitCategory } = props;
  function handleClickTag(category: Category) {
    emmitCategory(category);
  }
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category, index) => {
        const selected = selectedCategory.name === category.name;

        return (
          <div key={category.name}>
            <button
              onClick={() => handleClickTag(category)}
              className={`badge ${selected ? 'badge-primary' : 'badge-ghost'} `}
            >
              {category.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}
