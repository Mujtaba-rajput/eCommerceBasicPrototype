import {StyleSheet} from 'react-native';
import fonts from '../../utils/fonts';
import colors from '../../utils/colors';
import metrics from '../../utils/mertrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
    padding: 20,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  SafeAreaView1: {backgroundColor: '#FFF', flex: 0},
  SafeAreaView2: {flex: 1, backgroundColor: '#FFF'},
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  buttonStyle: {
    backgroundColor: '#EEE',
    paddingHorizontal: 10,
    width: 200,
    paddingVertical: 10,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
    borderRadius: 10,
  },
  text: {fontSize: 18, color: '#808080', fontWeight: 'bold'},
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlistContainer: {
    flexGrow: 1,
  },
  headerText: {
    fontSize: fonts.size.large,
    color: colors.primaryColor,
    fontWeight: '700',
  },
  margin: {
    marginHorizontal: 20,
  },
  cartAmountContainer: {
    backgroundColor: colors.light,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartAmountText: {
    fontSize: fonts.size.xLarge,
    color: colors.textColor,
  },
});
