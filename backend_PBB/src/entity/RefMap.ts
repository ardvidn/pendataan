import { Column, Entity, Index } from "typeorm";

@Index("ref_map_pkey", ["kdSektor"], { unique: true })
@Entity("ref_map", { schema: "public" })
export class RefMap {
  @Column("character", { primary: true, name: "kd_sektor", length: 2 })
  kdSektor!: string;

  @Column("character varying", { name: "kd_map", nullable: true, length: 6 })
  kdMap!: string | null;
}
