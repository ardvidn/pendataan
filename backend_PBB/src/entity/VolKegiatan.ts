import { Column, Entity, Index } from "typeorm";

@Index("vol_kegiatan_pkey", ["kdBngLantai", "kdJpb", "kdKegiatan", "kdPekerjaan", "tipeBng"], { unique: true })
@Entity("vol_kegiatan", { schema: "public" })
export class VolKegiatan {
  @Column("character", { primary: true, name: "kd_jpb", length: 2 })
  kdJpb!: string;

  @Column("character", { primary: true, name: "tipe_bng", length: 5 })
  tipeBng!: string;

  @Column("character", { primary: true, name: "kd_bng_lantai", length: 8 })
  kdBngLantai!: string;

  @Column("character", { primary: true, name: "kd_pekerjaan", length: 2 })
  kdPekerjaan!: string;

  @Column("character", { primary: true, name: "kd_kegiatan", length: 2 })
  kdKegiatan!: string;

  @Column("numeric", { name: "vol_kegiatan", precision: 10, scale: 4 })
  volKegiatan!: string;
}
