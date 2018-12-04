import React from 'react';
import * as RN from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
export * from 'react-native';

export const Text = styled(RN.Text)`
    font-size: 1em;
    font-family: inherit;
`;

export const View = styled(RN.View)`
  
`;

// export const TouchableHighlight = props => (
//     <RN.TouchableHighlight>
//         {
//             React.cloneElement(props.children, {
//                 setNativeProps : (nativeProps) => {
//                     props.children._root.setNativeProps(nativeProps);
//                 }
//             })
//         }
//     </RN.TouchableHighlight>
// );

export const Button = styled(RN.Button)`
    font-size: 1em;
`;
export const TextInput = styled(RN.TextInput)`
    font-size: 1em;
`;
export const Image = styled(RN.Image)`
    font-size: 1em;
    height: 100%;
`;

export const Modal2 = ({ className, ...props }) => {
  const contentClassName = `${className}__content`;
  const overlayClassName = `${className}__overlay`;
  return (
    <RN.Modal
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      {...props}
    />
  );
};
Modal2.propTypes = {
  className: PropTypes.string,
};

// export const StyledModal = styled(Modal)`

//   &__overlay {
//     position: fixed;
//     top: 0px;
//     left: 0px;
//     right: 0px;
//     bottom: 0px;
//     background-color: rgba(255, 255, 255, 0.75);
//   }

//   &__content {
//     position: absolute;
//     top: 40px;
//     left: 40px;
//     right: 40px;
//     bottom: 40px;
//     border: 1px solid #ccc;
//     background: #fff;
//     overflow: auto;
//     -webkit-overflow-scrolling: touch;
//     borderRadius: 4px;
//     outline: none;
//     padding: 20px;
//   }
// `;

