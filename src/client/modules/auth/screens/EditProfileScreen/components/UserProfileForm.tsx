import React from 'react';
import { Form, Table, Input, Select, Button } from 'antd';
import { User, Province } from '../../../../../services/service-proxies';
import { isMobile } from 'react-device-detect';
import { config } from '@client/config';
const Option = Select.Option;
const FormItem = Form.Item;
const EditableContext = React.createContext({});

const EditableRow = ({ form, index, ...props }: any) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

interface EditableCellProps {
  editing: boolean;
  record: any;
  provinces: Province[];
  t: (key: string) => string;
}
class EditableCell extends React.PureComponent<EditableCellProps, {}> {
  // tslint:disable:trailing-comma
  render() {
    const translate = this.props.t;
    const renderForm = (record: any, form: any) => {
      const { getFieldDecorator } = form;

      switch (record.key) {
        case 'name':
          return (
            <Form>
              <FormItem style={{ margin: 0 }}>
                {getFieldDecorator('familyName', {
                  rules: [
                    { required: true, message: `${translate('edit-profile:input-last-name')}` },
                  ],
                  initialValue: record.value.familyName,
                  validateTrigger: 'onBlur',
                })(
                  <Input placeholder={translate('edit-profile:your-last-name')} name='familyName' />
                )}
              </FormItem>
              <FormItem style={{ margin: 0 }}>
                {getFieldDecorator('givenName', {
                  rules: [
                    { required: true, message: `${translate('edit-profile:input-first-name')}` },
                  ],
                  initialValue: record.value.givenName,
                  validateTrigger: 'onBlur',
                })(
                  <Input placeholder={translate('edit-profile:your-first-name')} name='givenName' />
                )}
              </FormItem>
            </Form>
          );
        case 'phoneNo':
          return (
            <FormItem style={{ margin: 0 }}>
              {getFieldDecorator('phoneNo', {
                rules: [
                  { required: true, message: `${translate('edit-profile:input-phone')}` },
                  { pattern: config.regex.phone, message: `${translate('edit-profile:invalid-phone')}` },
                  { len: 12, message: translate('edit-profile:invalid-phone') }
                ],
                initialValue: record.value ? record.value : '+84',
                validateTrigger: 'onBlur',
              })(
                <Input
                  placeholder={translate('edit-profile:your-phone')}
                  name='phoneNo'
                />
              )}
            </FormItem>
          );
        case 'email':
          return (
            <FormItem style={{ margin: 0 }}>
              {getFieldDecorator('email', {
                rules: [
                  { required: true, message: `${translate('edit-profile:input-email')}` },
                ],
                initialValue: record.value,
                validateTrigger: 'onBlur',
              })(
                <Input
                  placeholder={translate('edit-profile:your-email')}
                  name='email'
                />
              )}
            </FormItem>
          );
        case 'address':
          return (
            <FormItem style={{ margin: 0 }}>
              {getFieldDecorator('address', {
                rules: [
                  { required: true, message: `${translate('edit-profile:input-address')}` },
                ],
                initialValue: record.value,
                validateTrigger: 'onBlur',
              })(
                <Input
                  placeholder={translate('edit-profile:your-address')}
                  name='address'
                />
              )}
            </FormItem>
          );
        case 'province':
          return (
            <FormItem style={{ margin: 0 }}>
              {getFieldDecorator('province', {
                rules: [
                  { required: true, message: `${translate('edit-profile:input-province')}` },
                ],
                initialValue: record.value,
                validateTrigger: 'onBlur',
              })(
                <Select style={{ width: '100%' }} placeholder={translate('edit-profile:select-province')}>
                  {this.props.provinces.map((item: any, index: any) => <Option value={item._id} key={index}>{item.name}</Option>)}
                </Select>
              )}
            </FormItem>
          );
        case 'description':
          return (
            <FormItem style={{ margin: 0 }}>
              {getFieldDecorator('description', {
                rules: [
                  { required: true, message: `${translate('edit-profile:input-description')}` },
                ],
                initialValue: record.value,
                validateTrigger: 'onBlur',
              })(
                <Input.TextArea
                  placeholder={translate('edit-profile:your-description')}
                  name='description'
                  autosize={{ minRows: 5 }}
                />
              )}
            </FormItem>
          );
        case 'newPassword':
          return (
            <Form>
              <FormItem style={{ margin: 0 }}>
                {getFieldDecorator('newPassword', {
                  rules: [
                    { required: true, message: `${translate('edit-profile:input-new-password')}` },
                  ],
                  initialValue: record.value,
                  validateTrigger: 'onBlur',
                })(
                  <Input type='password' placeholder={translate('edit-profile:new-password')} name='newPassword' />
                )}
              </FormItem>
              <FormItem style={{ margin: 0 }}>
                {getFieldDecorator('confirmPassword', {
                  rules: [
                    { required: true, message: `${translate('edit-profile:input-confirm-password')}` },
                    {
                      validator: (_rule: any, value: string, callback: any) => {
                        if (value !== form.getFieldValue('newPassword')) {
                          callback(`${translate('edit-profile:confirm-password-error')}`);
                        }
                        callback();
                      }
                    }
                  ],
                  validateTrigger: 'onBlur',
                })(
                  <Input type='password' placeholder={translate('edit-profile:confirm-password')} name='confirmPassword' />
                )}
              </FormItem>
            </Form>
          );
        default:
          return null;
      }
    };

    const {
      editing,
      ...restProps
    } = this.props;

    return (
      <EditableContext.Consumer>
        {(form: any) => {
          return (
            <td {...restProps}>
              {editing ? renderForm(this.props.record, form) : (
                <div style={{ wordBreak: 'break-word', whiteSpace: 'pre-line' }}>
                  {restProps.children}
                </div>
              )}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

interface EditableTableProps {
  provinces: Province[];
  loading: boolean;
  userProfile: Partial<User>;
  editUserProfile: (payload: any) => Promise<boolean>;
  t: (key: string) => string;
}
interface EditableTableState {
  data: any[];
  editingKey: string;
}
class EditableTable extends React.PureComponent<EditableTableProps, EditableTableState> {
  columns: any;

  constructor(props: EditableTableProps) {
    super(props);
    const translate = props.t;
    const filterProvince = this.props.provinces.filter((item) => item._id === (props.userProfile as any).province);
    const currentNameProvince = filterProvince[0] ? filterProvince[0].name : '';
    const data = [
      { label: `${translate('edit-profile:fullname')}`, value: { familyName: props.userProfile.familyName, givenName: props.userProfile.givenName }, key: 'name' },
      { label: `${translate('edit-profile:phone')}`, value: props.userProfile.phoneNo, key: 'phoneNo' },
      { label: `${translate('edit-profile:email')}`, value: props.userProfile.email || props.userProfile.loginDetail.email, key: 'email' },
      { label: `${translate('edit-profile:address')}`, value: props.userProfile.address, key: 'address' },
      { label: `${translate('edit-profile:province')}`, value: currentNameProvince, key: 'province' },
      { label: `${translate('edit-profile:description')}`, value: props.userProfile.description, key: 'description' },
    ];
    if (props.userProfile.loginDetail.provider === 'email') {
      data.push(
        { label: `${translate('edit-profile:password')}`, value: '', key: 'newPassword' },
      );
    }
    this.state = {
      data,
      editingKey: '',
    };

    this.columns = [
      {
        title: 'Label',
        dataIndex: 'label',
        width: isMobile ? '30%' : '20%',
        editable: false,
        render: (text: any, _record: any) => <span style={{wordBreak: `normal`}}>{text}</span>,
      },
      {
        title: 'Value',
        dataIndex: 'value',
        width: isMobile ? '50%' : '60%',
        editable: true,
        render: (_text: any, record: any) => typeof record.value === 'object' ? Object.keys(record.value).map((item) => record.value[item]).join(' ') : record ? record.value : '',
      },
      {
        title: 'Operations',
        dataIndex: 'operation',
        render: (_text: string, record: any) => {
          const editable = record.key === this.state.editingKey;

          return (
            <div>
              {editable ? (
                <span>
                  <EditableContext.Consumer>
                    {(form) => (
                      <Button onClick={() => this.save(form, record.key)} style={{marginBottom: '8px', marginRight: '8px'}} type='primary' icon='check'></Button>
                    )}
                  </EditableContext.Consumer>
                    <Button onClick={() => this.cancel()} icon='close'></Button>
                </span>
              ) : (
                <Button onClick={() => this.edit(record.key)} type='primary' icon='edit'></Button>
              )}
            </div>
          );
        },
      },
    ];
  }

  cancel = () => {
    this.setState({
      editingKey: '',
    });
  };

  edit(key: string) {
    this.setState({ editingKey: key });
  }

  save(form: any, key: string) {
    form.validateFields(async (error: any, row: any) => {
      if (!error) {
        const success = await this.props.editUserProfile(row);
        if (success) {
          this.setState({
            editingKey: '',
            data: this.state.data.map((item) => {
              if (key === 'newPassword') {
                return item;
              } else if (item.key === key && item.key !== 'province') {
                return {
                  ...item,
                  value: row.familyName ? row : row[key],
                };
              } else if (item.key === key && item.key === 'province') {
                const filterProvince = this.props.provinces.filter((ite) => ite._id === row[key]);
                const currentNameProvince = filterProvince[0] ? filterProvince[0].name : '';
                return {
                  ...item,
                  value: currentNameProvince,
                };
              } else {
                return item;
              }
            }),
          });
        }
      }
    });
  }

  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };

    const columns = this.columns.map((col: any) => {
      if (!col.editable) {
        return col;
      } else {
        return {
          ...col,
          onCell: (record: any) => ({
            record,
            provinces: this.props.provinces,
            editing: record.key === this.state.editingKey,
            t: this.props.t,
          }),
        };
      }
    });

    return (
      <div>
        <Table
          loading={this.props.loading}
          components={components}
          pagination={false}
          showHeader={false}
          dataSource={this.state.data}
          columns={columns}
          rowClassName={() => 'editable-row'}
        />
      </div>
    );
  }
}

interface Props {
  loading: boolean;
  userProfile: Partial<User>;
  editUserProfile: (payload: any) => Promise<boolean>;
  provinces: Province[];
  t: (key: string) => string;
}
interface State { }
class UserProfileForm extends React.PureComponent<Props, State> {
  render() {
    return (
      <EditableTable
        provinces={this.props.provinces}
        loading={this.props.loading}
        userProfile={this.props.userProfile}
        editUserProfile={this.props.editUserProfile}
        t={this.props.t}
      />
    );
  }
}

export default UserProfileForm;
