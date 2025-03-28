import { Column, Entity, Index } from "typeorm";

@Index("sim_hrg_kegiatan_pkey", ["kdBngLantai", "kdDati2", "kdJpb", "kdKegiatan", "kdPekerjaan", "kdPropinsi", "simThnKegiatan", "tipeBng"], { unique: true })
@Entity("sim_hrg_kegiatan", { schema: "public" })
export class SimHrgKegiatan {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "sim_thn_kegiatan", length: 4 })
  simThnKegiatan!: string;

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

  @Column("numeric", { name: "sim_hrg_kegiatan", precision: 11, scale: 4 })
  simHrgKegiatan!: string;
}
