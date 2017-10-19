import VeeValidate from 'vee-validate';
import moment from 'moment'

VeeValidate.Validator.extend('testvee', {
  getMessage: field => 'The ' + field + ' value is not through validate.',
  validate: value => {
      if(value % 2) {
          return true
      } else {
          return false
      }
  }
});

VeeValidate.Validator.extend('dateless', {
  getMessage: (field, obj) => {
      let targetName= obj[0].targetName;
      return 'The ' + field + ' should not later than ' + targetName + '.'
  },
  validate: (value,obj) => {
      let target = null;
      if(obj[0]){
          target = new Date(obj[0].target)
      }
      return moment(value).isBefore(target)
  }
});
