/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z3y0j37443gov82")

  collection.name = "tasks"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z3y0j37443gov82")

  collection.name = "Tasks"

  return dao.saveCollection(collection)
})
