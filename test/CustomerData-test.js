import { expect } from 'chai';
import customerData from './test-data/customerData'
import CustomerData from '../src/CustomerData'
import Customer from '../src/Customer'

describe('Customer Data', function() {
  let customerData1;
  beforeEach(function() {
    customerData1 = new CustomerData(customerData);
  });

  it('should be a function', function() {
    expect(CustomerData).to.be.a('function');
  });

  it('should be an instance of Customer Data', function() {
    expect(customerData1).to.be.an.instanceof(CustomerData);
  });

  it('should have a list of customers', function() {
    expect(customerData1.users).to.deep.equal(customerData.users);
  });

  it('should have a list of customers that are instances of Customer', function() {
    expect(customerData1.users[0]).to.be.an.instanceof(Customer)
  })

  describe('Find User', function() {
    it('should be a function', function() {
      expect(customerData1.findUserByName).to.be.a('function');
      expect(customerData1.findUserByID).to.be.a('function');
    });

    it('should return a single user based on a name', function() {
      expect(customerData1.findUserByName('Danny Torrance')).to.deep.equal({ id: 2, name: 'Danny Torrance'});
    });

    it('should return a single user based on an id', function() {
      expect(customerData1.findUserByID(2)).to.deep.equal({ id: 2, name: 'Danny Torrance'});
    });
  })
})
