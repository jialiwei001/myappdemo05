import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './animal.reducer';
import { IAnimal } from 'app/shared/model/animal.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IAnimalDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class AnimalDetail extends React.Component<IAnimalDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { animalEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="myappdemo05App.animal.detail.title">Animal</Translate> [<b>{animalEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="name">
                <Translate contentKey="myappdemo05App.animal.name">Name</Translate>
              </span>
            </dt>
            <dd>{animalEntity.name}</dd>
            <dt>
              <span id="variety">
                <Translate contentKey="myappdemo05App.animal.variety">Variety</Translate>
              </span>
            </dt>
            <dd>{animalEntity.variety}</dd>
            <dt>
              <span id="price">
                <Translate contentKey="myappdemo05App.animal.price">Price</Translate>
              </span>
            </dt>
            <dd>{animalEntity.price}</dd>
            <dt>
              <span id="age">
                <Translate contentKey="myappdemo05App.animal.age">Age</Translate>
              </span>
            </dt>
            <dd>{animalEntity.age}</dd>
          </dl>
          <Button tag={Link} to="/entity/animal" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>&nbsp;
          <Button tag={Link} to={`/entity/animal/${animalEntity.id}/edit`} replace color="primary">
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

const mapStateToProps = ({ animal }: IRootState) => ({
  animalEntity: animal.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimalDetail);
