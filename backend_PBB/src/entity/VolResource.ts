import { Column, Entity, Index } from "typeorm";

@Index("vol_resource_pkey", ["kdGroupResource", "kdKegiatan", "kdPekerjaan", "kdResource"], { unique: true })
@Entity("vol_resource", { schema: "public" })
export class VolResource {
  @Column("character", { primary: true, name: "kd_pekerjaan", length: 2 })
  kdPekerjaan!: string;

  @Column("character", { primary: true, name: "kd_kegiatan", length: 2 })
  kdKegiatan!: string;

  @Column("character", { primary: true, name: "kd_group_resource", length: 2 })
  kdGroupResource!: string;

  @Column("character", { primary: true, name: "kd_resource", length: 2 })
  kdResource!: string;

  @Column("numeric", { name: "vol_resource", precision: 10, scale: 4 })
  volResource!: string;
}
