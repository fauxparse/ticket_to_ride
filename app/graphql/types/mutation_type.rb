Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :drawCard, field: Mutations::DrawCardMutation.field
  field :grabCard, field: Mutations::GrabCardMutation.field
end
