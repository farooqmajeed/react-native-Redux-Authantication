import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common'


class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>

                    <Input
                        label="Name"
                        placeholder="Farooq"
                        />
                </CardSection>

                <CardSection>
                    label="phone"
                placeholder="03323431306"
                </CardSection>

                <CardSection>

                </CardSection>

                <CardSection>
                    <Button>
                        save
                    </Button>
                </CardSection>m

            </Card>
        );
    }
}

export default EmployeeCreate;