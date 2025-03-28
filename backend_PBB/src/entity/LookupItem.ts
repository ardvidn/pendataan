import { Column, Entity, Index } from "typeorm";

@Index("lookup_item_pkey", ["kdLookupGroup", "kdLookupItem"], { unique: true })
@Entity("lookup_item", { schema: "public" })
export class LookupItem {
  @Column("character", { primary: true, name: "kd_lookup_group", length: 2 })
  kdLookupGroup!: string;

  @Column("character", { primary: true, name: "kd_lookup_item", length: 1 })
  kdLookupItem!: string;

  @Column("character varying", { name: "nm_lookup_item", length: 225 })
  nmLookupItem!: string;
}
