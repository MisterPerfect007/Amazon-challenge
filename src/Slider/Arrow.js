/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Arrow = ({direction, handler}) => (

        <div 
            css={css`
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px;
                cursor: pointer;
                top: 20%;
                color: #131921;
                background: rgba(254, 189, 105, 0.56);
                border: 2px solid rgba(254, 189, 105, 0.56);
                border-radius: 5px;
                ${direction === 'right'? 'right: 25px' : 'left: 25px'}
            `}
            onClick={handler}
        >
            {
                direction === 'right'? <NavigateNextIcon /> : <NavigateBeforeIcon /> 
            }
        </div>
)

export default Arrow
