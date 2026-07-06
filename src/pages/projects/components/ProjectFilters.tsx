import { useTranslation } from 'react-i18next';

interface ProjectFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function ProjectFilters({ activeFilter, onFilterChange }: ProjectFiltersProps) {
  const { t } = useTranslation('projects');

  const filters = [
    { key: 'all', label: t('filters.all') },
    { key: 'Museum', label: t('filters.museum') },
    { key: 'Exhibition', label: t('filters.exhibition') },
    { key: 'Interior', label: t('filters.interior') },
    { key: 'Cultural', label: t('filters.cultural') },
    { key: 'Competition', label: t('filters.competition') },
    { key: 'Research', label: t('filters.research') },
    { key: 'International', label: t('filters.international') },
  ];

  return (
    <div className="sticky top-[72px] z-40 bg-background-50/90 backdrop-blur-md border-y border-background-200/50">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4">
        <div className="flex items-center gap-1 md:gap-2 overflow-x-auto scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => onFilterChange(filter.key)}
              className={`px-3 md:px-4 py-1.5 text-xs md:text-sm tracking-[0.1em] uppercase whitespace-nowrap rounded-full transition-all duration-300 cursor-pointer ${
                activeFilter === filter.key
                  ? 'bg-primary-500 text-background-50'
                  : 'text-foreground-500 hover:text-foreground-200 hover:bg-background-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}