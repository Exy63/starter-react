export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

function Button({ children, mode = 'filled', Icon }) {
  return (
    <button className={mode + '-button button ' + (Icon ? 'icon-button' : '')}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      {children}
    </button>
  );
}
