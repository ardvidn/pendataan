import { Column, Entity, Index } from "typeorm";

@Index("nop_paspor_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "paspor"], { unique: true })
@Entity("nop_paspor", { schema: "public" })
export class NopPaspor {
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

  @Column("character varying", { primary: true, name: "paspor", length: 15 })
  paspor!: string;

  @Column("character varying", { name: "nama", nullable: true, length: 30 })
  nama!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_awal_berlaku",
    nullable: true,
  })
  tglAwalBerlaku!: Date | null;

  @Column("timestamp without time zone", {
    name: "tgl_akhir_berlaku",
    nullable: true,
  })
  tglAkhirBerlaku!: Date | null;
}
