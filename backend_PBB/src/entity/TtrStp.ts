import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Stp } from "./Stp";
import { Pegawai } from "./Pegawai";

@Index("ttr_stp_pkey", ["kdBlok", "kdDati2", "kdJnsOp", "kdKecamatan", "kdKelurahan", "kdPropinsi", "noUrut", "tglTerbitStp"], { unique: true })
@Entity("ttr_stp", { schema: "public" })
export class TtrStp {
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
    name: "tgl_terbit_stp",
  })
  tglTerbitStp!: Date;

  @Column("timestamp without time zone", { name: "tgl_terima_wp_stp" })
  tglTerimaWpStp!: Date;

  @Column("character varying", {
    name: "nm_yg_menerima_stp",
    nullable: true,
    length: 30,
  })
  nmYgMenerimaStp!: string | null;

  @Column("timestamp without time zone", { name: "tgl_rekam_ttr_stp" })
  tglRekamTtrStp!: Date;

  @OneToOne(() => Stp, (stp) => stp.ttrStp)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
    { name: "kd_kecamatan", referencedColumnName: "kdKecamatan" },
    { name: "kd_kelurahan", referencedColumnName: "kdKelurahan" },
    { name: "kd_blok", referencedColumnName: "kdBlok" },
    { name: "no_urut", referencedColumnName: "noUrut" },
    { name: "kd_jns_op", referencedColumnName: "kdJnsOp" },
    { name: "tgl_terbit_stp", referencedColumnName: "tglTerbitStp" },
  ])
  stp!: Stp;

  @ManyToOne(() => Pegawai, (pegawai) => pegawai.ttrStps)
  @JoinColumn([{ name: "nip_perekam_ttr_stp", referencedColumnName: "nip" }])
  nipPerekamTtrStp!: Pegawai;
}
