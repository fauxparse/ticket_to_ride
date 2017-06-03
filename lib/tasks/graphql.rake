namespace :graphql do
  desc 'regenerate GraphQL queries'
  task refresh: :environment do
    SOURCE = Rails.root.join('app', 'javascript', 'application')
    SCHEMA_FILE = File.join(SOURCE, 'schema.json')
    SCHEMA = TicketToRideSchema.execute GraphQL::Introspection::INTROSPECTION_QUERY

    puts "Writing JSON schema to #{SCHEMA_FILE}..."
    File.open(SCHEMA_FILE, 'w') do |f|
      f.write SCHEMA.to_json
    end
    puts 'Running Relay Compiler...'
    `yarn run relay-compiler -- --src #{SOURCE} --schema #{SCHEMA_FILE}`
  end
end
