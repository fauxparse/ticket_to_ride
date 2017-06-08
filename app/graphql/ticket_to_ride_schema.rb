TicketToRideSchema = GraphQL::Schema.define do
  query(Types::QueryType)
  mutation(Types::MutationType)

  # Relay Object Identification:

  # Return a string UUID for `object`
  id_from_object ->(object, type_definition, query_ctx) {
    GraphQL::Schema::UniqueWithinType.encode(type_definition.name, object.id)
  }

  # Given a string UUID, find the object
  object_from_id ->(id, query_ctx) {
    type_name, item_id = GraphQL::Schema::UniqueWithinType.decode(id)
    type_name.constantize.find(item_id)
  }

  # Object Resolution
  resolve_type ->(obj, ctx) do
    case obj
    when Game then Types::PostType
    when Player then Types::PlayerType
    when Card then Types::CardType
    else raise("Unexpected object: #{obj}")
    end
  end
end
