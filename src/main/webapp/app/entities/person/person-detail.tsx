import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './person.reducer';
import { IPerson } from 'app/shared/model/person.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPersonDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class PersonDetail extends React.Component<IPersonDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { personEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="myappdemo05App.person.detail.title">Person</Translate> [<b>{personEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="name">
                <Translate contentKey="myappdemo05App.person.name">Name</Translate>
              </span>
            </dt>
            <dd>{personEntity.name}</dd>
            <dt>
              <span id="sex">
                <Translate contentKey="myappdemo05App.person.sex">Sex</Translate>
              </span>
            </dt>
            <dd>{personEntity.sex}</dd>
            <dt>
              <span id="age">
                <Translate contentKey="myappdemo05App.person.age">Age</Translate>
              </span>
            </dt>
            <dd>{personEntity.age}</dd>
            <dt>
              <span id="height">
                <Translate contentKey="myappdemo05App.person.height">Height</Translate>
              </span>
            </dt>
            <dd>{personEntity.height}</dd>
            <dt>
              <span id="weight">
                <Translate contentKey="myappdemo05App.person.weight">Weight</Translate>
              </span>
            </dt>
            <dd>{personEntity.weight}</dd>
          </dl>
          <Button tag={Link} to="/entity/person" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/person/${personEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ person }: IRootState) => ({
  personEntity: person.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonDetail);
