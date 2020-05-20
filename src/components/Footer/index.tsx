import React from 'react';
import { useSelector } from "react-redux";
import { selectHistory } from "../../features/History/slice";
import { highlightPath } from "../../features/History/utils";
import './styles.scss';

const Footer: React.FC = () => {
  const history = useSelector(selectHistory);

  return (
    <>
      {history.length > 0 &&
        <div className="history">
          <h3>History:</h3>
          <p>Path in winnable arrays is marked as bold</p>
          {history.map((item, i) => (
            <div style={{ color: item.path.length > 0 ? 'green' : 'red' }} key={i} dangerouslySetInnerHTML={{ __html: highlightPath(item) }}></div>
          ))}
        </div>
      }
    </>
  );
};

export default Footer;