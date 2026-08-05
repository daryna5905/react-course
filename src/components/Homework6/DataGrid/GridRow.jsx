import { memo } from 'react';

function GridRow({ fruit }) {
  return (
    <li>
      Назва: {fruit.name} Ціна: {fruit.price}
    </li>
  );
}

export default memo(GridRow);
