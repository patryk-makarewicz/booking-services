import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import {
  decAdults,
  decChildren,
  incAdults,
  incChildren,
} from '../../redux/Actions/roomOne-actions';
import {
  decAdultsTwo,
  decChildrenTwo,
  incAdultsTwo,
  incChildrenTwo,
} from '../../redux/Actions/roomTwo-actions';
import { toggleAddRoom } from '../../redux/Actions/addRoom-actions';

import styles from './Box.module.scss';

import TangleImage from '../../assets/tangle.png';
import ButtonArrow from '../Buttons/Arrow';
import ButtonAddRoom from '../Buttons/AddRoom';
import ButtonReady from '../Buttons/Ready';
import ButtonClose from '../Buttons/Close';
import ButtonStop from '../Buttons/Stop';

const Tangle = styled.img`
  position: relative;
  left: 230px;
  top: 4px;
`;

const Span = styled.span`
  font-weight: 400;
`;

const Box = (props) => {
  const {
    addAdults,
    removeAdults,
    addAdultsTwo,
    removeAdultsTwo,
    adultsNumber,
    adultsTwoNumber,
    addChildren,
    removeChildren,
    addChildrenTwo,
    removeChildrenTwo,
    childrenNumber,
    childrenTwoNumber,
    addRoom,
    showNextRoom,
  } = props;

  return (
    <>
      <Tangle src={TangleImage} alt="Tangle" />
      <div className={styles.box}>
        <header className={styles.box__header}>
          <p className={styles.box__room}>Room 1</p>
        </header>
        <p className={styles.box__details}>
          Adults <Span>(18-64 years old)</Span>
        </p>
        <div className={styles.box__buttons}>
          {adultsNumber === 0 ? <ButtonStop /> : <ButtonArrow onPress={() => removeAdults()} />}
          <p className={styles.box__number}>{adultsNumber}</p>
          {adultsNumber === 4 ? (
            <ButtonStop secondary />
          ) : (
            <ButtonArrow secondary onPress={() => addAdults()} />
          )}
        </div>
        <p className={styles.box__details}>
          Children <Span>(2-12 years old)</Span>
        </p>
        <div className={styles.box__buttons}>
          {childrenNumber === 0 ? <ButtonStop /> : <ButtonArrow onPress={() => removeChildren()} />}
          <p className={styles.box__number}>{childrenNumber}</p>
          {childrenNumber === 9 ? (
            <ButtonStop secondary />
          ) : (
            <ButtonArrow secondary onPress={() => addChildren()} />
          )}
        </div>
        {showNextRoom && (
          <>
            <p className={styles.box__line} />
            <header className={styles.box__header}>
              <p className={styles.box__room}>Room 2</p>
              <ButtonClose onPress={() => addRoom()} />
            </header>
            <p className={styles.box__details}>
              Adults <Span>(18-64 years old)</Span>
            </p>
            <div className={styles.box__buttons}>
              {adultsTwoNumber === 0 ? (
                <ButtonStop />
              ) : (
                <ButtonArrow onPress={() => removeAdultsTwo()} />
              )}
              <p className={styles.box__number}>{adultsTwoNumber}</p>
              {adultsTwoNumber === 4 ? (
                <ButtonStop secondary />
              ) : (
                <ButtonArrow secondary onPress={() => addAdultsTwo()} />
              )}
            </div>
            <p className={styles.box__details}>
              Children <Span>(2-12 years old)</Span>
            </p>
            <div className={styles.box__buttons}>
              {childrenTwoNumber === 0 ? (
                <ButtonStop />
              ) : (
                <ButtonArrow onPress={() => removeChildrenTwo()} />
              )}
              <p className={styles.box__number}>{childrenTwoNumber}</p>
              {childrenTwoNumber === 9 ? (
                <ButtonStop secondary />
              ) : (
                <ButtonArrow secondary onPress={() => addChildrenTwo()} />
              )}
            </div>
            <p className={styles.box__line} />
          </>
        )}
        {!showNextRoom && <ButtonAddRoom onPress={() => addRoom()}>Add room</ButtonAddRoom>}
        <ButtonReady>Ready</ButtonReady>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addAdults: () => dispatch(incAdults()),
  removeAdults: () => dispatch(decAdults()),
  addChildren: () => dispatch(incChildren()),
  removeChildren: () => dispatch(decChildren()),
  addAdultsTwo: () => dispatch(incAdultsTwo()),
  removeAdultsTwo: () => dispatch(decAdultsTwo()),
  addChildrenTwo: () => dispatch(incChildrenTwo()),
  removeChildrenTwo: () => dispatch(decChildrenTwo()),
  addRoom: () => dispatch(toggleAddRoom()),
});

const mapStateToProps = (state) => ({
  adultsNumber: state.roomOne.adults,
  childrenNumber: state.roomOne.children,
  adultsTwoNumber: state.roomTwo.adultsTwo,
  childrenTwoNumber: state.roomTwo.childrenTwo,
  showNextRoom: state.nextRoom.showNextRoom,
});

export default connect(mapStateToProps, mapDispatchToProps)(Box);
