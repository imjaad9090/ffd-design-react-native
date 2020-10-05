/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';

import {FlatList} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {Block, Text} from './components';
import {createAppContainer} from 'react-navigation';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import {deviceHeight, deviceWidth, mediumIcon, sizes} from './constants/theme';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
class HomeScreen extends React.Component {
  render() {
    var dummy_list = [1, 2, 3, 4, 2, 43];
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#142a63',
        }}>
        <ScrollView style={{flex: 1}}>
          {dummy_list.map((item, index) => {
            return (
              <Block
                flex={false}
                style={{
                  borderBottomWidth: 1,
                  borderColor: 'rgba(255,255,255,0.2)',
                }}
                padding={deviceWidth * 0.04}
                width={deviceWidth}
                row
                space={'between'}>
                <Block flex={false}>
                  <Text white medium font>
                    Fri 02.10.2020 - 15:00
                  </Text>

                  <Text style={{marginTop: 18}} white regular caption>
                    Wind: 6.4 km/h
                  </Text>
                  <Text style={{marginTop: 5}} white regular caption>
                    Humidity: 43.34234%
                  </Text>
                </Block>

                <Block flex={false} style={{alignItems: 'flex-end'}}>
                  <Image
                    source={{
                      uri:
                        'https://www.iconfinder.com/data/icons/weather-flat-9/512/weather__season__forecast__sunny__sun__hot__big_-512.png',
                    }}
                    style={{
                      width: deviceWidth * 0.09,
                      height: deviceWidth * 0.09,
                    }}
                    resizeMode={'contain'}
                  />

                  <Text white regular small>
                    Clear sky
                  </Text>
                  <Text style={{marginTop: 4}} white medium title>
                    23°C
                  </Text>
                </Block>
              </Block>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator(
  {
    Today: HomeScreen,
    Tomorrow: HomeScreen,
    Later: HomeScreen,
  },
  {
    lazy: false,
    tabBarOptions: {
      style: {
        height: deviceHeight * 0.057,
        backgroundColor: 'transparent',
      },
      indicatorStyle: {
        backgroundColor: 'white',
      },
      labelStyle: {
        fontSize: deviceWidth * 0.033,
      },
    },
  },
);

var Tabs = createAppContainer(TabNavigator);
class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MenuProvider>
        <Block flex={1} color={'white'}>
          {/* Header  Section */}

          <LinearGradient
            colors={['#122143', '#3b5998']}
            style={styles.linearGradient}>
            <Block flex={1}>
              <Text white heading medium>
                Shadman Lahore
              </Text>
            </Block>

            <Block flex={0.7} row center space={'between'}>
              <TouchableOpacity
                hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}>
                <Icon name={'search'} color={'white'} size={mediumIcon} />
              </TouchableOpacity>

              <TouchableOpacity
                hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}>
                <Icon name={'refresh'} color={'white'} size={mediumIcon} />
              </TouchableOpacity>

              <TouchableOpacity
                hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}>
                <Icon name={'gps-fixed'} color={'white'} size={mediumIcon} />
              </TouchableOpacity>

              <TouchableOpacity
                hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}>
                <Icon name={'more-vert'} color={'white'} size={mediumIcon} />
              </TouchableOpacity>
            </Block>
          </LinearGradient>

          {/* Current Weather Section */}

          <Block flex={false} width={deviceWidth} height={deviceHeight * 0.54}>
            <ImageBackground
              resizeMode={'cover'}
              style={{
                flex: 1,
                paddingVertical: deviceHeight * 0.03,
                alignItems: 'center',
              }}
              source={{
                uri:
                  'https://i.pinimg.com/originals/60/33/0c/60330cc9c1bc3c74257bd11b85a029f8.png',
              }}>
              <Menu>
                <MenuTrigger text="Select action" />
                <MenuOptions>
                  <MenuOption onSelect={() => alert(`Save`)} text="Save" />
                  <MenuOption onSelect={() => alert(`Delete`)}>
                    <Text style={{color: 'red'}}>Delete</Text>
                  </MenuOption>
                  <MenuOption
                    onSelect={() => alert(`Not called`)}
                    disabled={true}
                    text="Disabled"
                  />
                </MenuOptions>
              </Menu>
              <Text white medium size={35}>
                23°C
              </Text>

              <Block
                margin={[0, 0, 10, deviceWidth * 0.22]}
                row
                flex={false}
                right>
                <Image
                  source={{
                    uri:
                      'https://www.iconfinder.com/data/icons/weather-flat-9/512/weather__season__forecast__sunny__sun__hot__big_-512.png',
                  }}
                  style={{
                    marginTop: 12,
                    width: deviceWidth * 0.26,
                    height: deviceWidth * 0.26,
                  }}
                  resizeMode={'contain'}
                />

                <Text style={{marginLeft: 40}} white regular small>
                  Last update: {'\n'} 3:23pm
                </Text>
              </Block>

              <Text regular font white>
                clear sky
              </Text>

              <Block
                margin={[deviceHeight * 0.03, 0, 0, 0]}
                flex={false}
                middle
                width={deviceWidth}
                row
                center>
                <Block
                  center
                  padding={13}
                  color={'rgba(0,0,0,0.24)'}
                  flex={false}
                  height={deviceHeight * 0.1}
                  width={deviceWidth * 0.27}>
                  <Block flex={false} row center>
                    <Feather name={'wind'} color={'white'} size={mediumIcon} />

                    <Text white heading medium>
                      {' '}
                      Wind
                    </Text>
                  </Block>

                  <Text style={{marginTop: 5}} white regular font>
                    7.3 km/h →
                  </Text>
                </Block>

                <Block
                  center
                  padding={13}
                  color={'rgba(0,0,0,0.24)'}
                  flex={false}
                  margin={[0, 6]}
                  height={deviceHeight * 0.1}
                  width={deviceWidth * 0.27}>
                  <Block flex={false} row center>
                    <Feather name={'eye'} color={'white'} size={mediumIcon} />

                    <Text white heading medium>
                      {' '}
                      Visibility
                    </Text>
                  </Block>

                  <Text style={{marginTop: 5}} white regular font>
                    7.3 km/h →
                  </Text>
                </Block>

                <Block
                  center
                  padding={13}
                  color={'rgba(0,0,0,0.24)'}
                  flex={false}
                  height={deviceHeight * 0.1}
                  width={deviceWidth * 0.27}>
                  <Block flex={false} row center>
                    <Feather
                      name={'droplet'}
                      color={'white'}
                      size={mediumIcon}
                    />

                    <Text white heading medium>
                      {' '}
                      Humidity
                    </Text>
                  </Block>

                  <Text style={{marginTop: 5}} white regular font>
                    7.3 km/h →
                  </Text>
                </Block>
              </Block>
            </ImageBackground>
          </Block>

          {/* Weather Tabs */}
          <Block
            flex={1}
            margin={[-deviceHeight * 0.057, 0, 0, 0]}
            color={'transparent'}>
            <Tabs />
          </Block>
        </Block>
      </MenuProvider>
    );
  }
}

var styles = StyleSheet.create({
  linearGradient: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingVertical: deviceHeight * 0.01,
    paddingHorizontal: deviceWidth * 0.03,
  },
});

export default App;
