module Types
  CardPositionConnectionType =
    CardType.define_connection(edge_type: CardPositionEdgeType) do
      name 'CardPositionConnection'
    end
end
