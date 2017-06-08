module Types
  CardPositionEdgeType = CardType.define_edge do
    name 'CardPositionEdge'
    field :position, types.Int do
      resolve ->(edge, _, _) { edge.node.position }
    end
  end
end
