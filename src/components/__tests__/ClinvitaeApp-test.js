import React from 'react'
import { shallow } from 'enzyme'

import ClinvitaeApp from '../ClinvitaeApp'


test('ClinvitaeApp renders the logo', function () {
  const app = shallow(<ClinvitaeApp />)
  expect(app.find('img#clinvitae-logo')).toHaveLength(1)
})
