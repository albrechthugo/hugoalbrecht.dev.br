import transformDate from './transformDate';

describe('TransformDate', () => {
  it('should return formatted date from string', () => {
    expect(transformDate('2020-09-17T00:00:00Z')).toEqual('16/09/2020');
    expect(transformDate('2020-01-01T00:00:00Z')).toEqual('31/12/2019');
    expect(transformDate('2020-01-01T05:00:00Z')).toEqual('01/01/2020');
    expect(transformDate('2020-01-22T00:00:00Z')).toEqual('21/01/2020');
    expect(transformDate('2020-01-22T03:00:00Z')).toEqual('22/01/2020');
  });
});
