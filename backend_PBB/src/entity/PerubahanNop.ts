import { Column, Entity, Index } from "typeorm";

@Index("perubahan_nop_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "tglPerubahanNop"], { unique: true })
@Index(
  "d13_1_ak",
  ["kdBlok", "kdBlokAsal", "kdDati2", "kdDati2Asal", "kdJnsOp", "kdJnsOpAsal", "kdKecamatan", "kdKecamatanAsal", "kdKelurahan", "kdKelurahanAsal", "kdPropinsi", "kdPropinsiAsal", "noUrut", "noUrutAsal", "statusPerubahanNop"],
  {}
)
@Entity("perubahan_nop", { schema: "public" })
export class PerubahanNop {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "kd_blok", length: 3 })
  kdBlok!: string;

  @Column("character", { primary: true, name: "no_urut", length: 4 })
  noUrut!: string;

  @Column("character", { primary: true, name: "kd_jns_op", length: 1 })
  kdJnsOp!: string;

  @Column("timestamp without time zone", {
    primary: true,
    name: "tgl_perubahan_nop",
  })
  tglPerubahanNop!: Date;

  @Column("character", { name: "kd_propinsi_asal", length: 2 })
  kdPropinsiAsal!: string;

  @Column("character", { name: "kd_dati2_asal", length: 2 })
  kdDati2Asal!: string;

  @Column("character", { name: "kd_kecamatan_asal", length: 3 })
  kdKecamatanAsal!: string;

  @Column("character", { name: "kd_kelurahan_asal", length: 3 })
  kdKelurahanAsal!: string;

  @Column("character", { name: "kd_blok_asal", length: 3 })
  kdBlokAsal!: string;

  @Column("character", { name: "no_urut_asal", length: 4 })
  noUrutAsal!: string;

  @Column("character", { name: "kd_jns_op_asal", length: 1 })
  kdJnsOpAsal!: string;

  @Column("character", { name: "nip_perubah_nop", length: 18 })
  nipPerubahNop!: string;

  @Column("smallint", { name: "status_perubahan_nop", default: () => "0" })
  statusPerubahanNop!: number;
}
