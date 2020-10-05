import React, {useState} from 'react';
import AccordionContent from './AccordionWrapper';
import {TouchableOpacity} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Block, Text} from '..';
import Icon from 'react-native-vector-icons/Feather';
import {
  deviceHeight,
  deviceWidth,
  isIos,
  colors,
  font,
  sizes,
} from '../../constants/theme';

const AccordionItem = (props) => {
  const [title, updateTitle] = useState(1);
  const [expand, updateExpand] = useState(false);

  return (
    <Block
      margin={[deviceHeight * 0.016, 0, 0, 0]}
      flex={false}
      selfcenter
      padding={10}
      color={'white'}
      width={deviceWidth * 0.9}
      radius={10}>
      <TouchableOpacity onPress={() => updateExpand(expand ? false : true)}>
        <Block flex={false} row space={'between'} center width={'100%'}>
          <Text bold caption black>
            {props.q}
          </Text>

          <Icon
            color={'black'}
            style={{transform: [{rotate: expand ? '180deg' : '0deg'}]}}
            name="chevron-down"
            size={deviceWidth * 0.05}
          />
        </Block>
      </TouchableOpacity>

      <AccordionContent duration={500} {...{expand}} {...this.props}>
        <Block flex={false} margin={[10, 0, 0, 0]} row>
          <Text regular black small>
            {props.txt}
          </Text>
        </Block>
      </AccordionContent>
    </Block>
  );
};

export default AccordionItem;
